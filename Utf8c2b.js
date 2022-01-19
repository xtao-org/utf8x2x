export const Utf8c2b = ({byte, end}) => {
  return {
    codePoint: (codePoint) => {
      if (codePoint <= 0x7F) {
        byte(codePoint)
      }
      else if (codePoint <= 0x07FF) {
        byte(((codePoint >> 6) & 0x1F) | 0xC0) 
        byte(((codePoint >> 0) & 0x3F) | 0x80)
      }
      else if (codePoint <= 0xFFFF) {
        byte(((codePoint >> 12) & 0x0F) | 0xE0)
        byte(((codePoint >>  6) & 0x3F) | 0x80)
        byte(((codePoint >>  0) & 0x3F) | 0x80)
      }
      else if (codePoint <= 0x10FFFF) {
        byte(((codePoint >> 18) & 0x07) | 0xF0)
        byte(((codePoint >> 12) & 0x3F) | 0x80)
        byte(((codePoint >>  6) & 0x3F) | 0x80)
        byte(((codePoint >>  0) & 0x3F) | 0x80)
      }
      else throw Error(`Unexpected code point ${codePoint}!`)
    },
    end() {
      return end()
    }
  }
}