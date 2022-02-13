export const Utf8c2bs = ({bytes, end}) => {
  return {
    codePoint: (codePoint) => {
      if (codePoint <= 0x7F) {
        bytes([codePoint])
      }
      else if (codePoint <= 0x07FF) {
        bytes([
          ((codePoint >> 6) & 0x1F) | 0xC0, 
          ((codePoint >> 0) & 0x3F) | 0x80,
        ])
      }
      else if (codePoint <= 0xFFFF) {
        bytes([
          ((codePoint >> 12) & 0x0F) | 0xE0,
          ((codePoint >>  6) & 0x3F) | 0x80,
          ((codePoint >>  0) & 0x3F) | 0x80,
        ])
      }
      else if (codePoint <= 0x10FFFF) {
        bytes([
          ((codePoint >> 18) & 0x07) | 0xF0,
          ((codePoint >> 12) & 0x3F) | 0x80,
          ((codePoint >>  6) & 0x3F) | 0x80,
          ((codePoint >>  0) & 0x3F) | 0x80,
        ])
      }
      else throw Error(`Unexpected code point ${codePoint}!`)
    },
    end() {
      return end()
    }
  }
}