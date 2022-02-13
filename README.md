# Utf8x2x

Simple functions to convert between a streams of UTF-8 bytes and UTF-8 code points.

`Utf8b2c` converts bytes to code points, one byte at a time, taking in one byte at a time, emitting one code point at a time.

`Utf8bs2c` converts bytes to code points, taking in multiple bytes at a time, emitting one code point at a time.

`Utf8c2b` converts code points to bytes, taking in one code point at a time, emitting one byte at a time.

`Utf8c2bs` converts code points to bytes, taking in  one code point at a time, emitting multiple bytes at a time.

***

© 2022 Darius J Chuck
