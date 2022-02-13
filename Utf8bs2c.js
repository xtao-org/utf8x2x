export const Utf8b2cs = (next) => {
  const {codePoint} = next

  let partialCodePoint = 0
  let bytesRemain = 0

  return {
    bytes: (bytes) => {
      for (const byte of bytes) switch (bytesRemain) {
      case 0:
        if (byte < 128) codePoint(byte)
        else if ((byte >> 5) === 0b110) {
          bytesRemain = 1
          partialCodePoint = (byte & 0b00011111) << 6
        }
        else if ((byte >> 4) === 0b1110) {
          bytesRemain = 2
          partialCodePoint = (byte & 0b00001111) << 12
        }
        else if ((byte >> 3) === 0b11110) {
          bytesRemain = 3
          partialCodePoint = (byte & 0b00000111) << 18
        }
        else {
          throw Error(`Unexpected byte ${byte} (0x${byte.toString(16)} = 0b${byte.toString(2)})!`)
        }
      break
      case 1:
        bytesRemain = 0
        codePoint(partialCodePoint | (byte & 0b00111111))
      break
      case 2:
        bytesRemain = 1
        partialCodePoint |= (byte & 0b00111111) << 6
      break
      case 3:
        bytesRemain = 2
        partialCodePoint |= (byte & 0b00111111) << 12
      break
      }
    },
    end: () => {
      if (bytesRemain > 0) {
        throw Error(`Unexpected end! Expected at least ${bytesRemain} more bytes. Incomplete code point at the end: ${partialCodePoint}.`)
      }
      return next.end?.()
    }
  }
}

