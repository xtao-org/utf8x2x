export type CodePointHandler = (byte: number) => void;
export const Utf8b2c: <End>(next: {
    codePoint: CodePointHandler;
    end?: () => End;
}) => {
    byte: (byte: number) => void,
    end: () => End,
};
export const Utf8bs2c: <End>(next: {
    codePoint: CodePointHandler;
    end?: () => End;
}) => {
    bytes: (bytes: Iterable<number>) => void,
    end: () => End,
};
export const Utf8c2b: <End>(next: {
    byte: (byte: number) => void;
    end?: () => End;
}) => {
    codePoint: CodePointHandler,
    end: () => End,
};
export const Utf8c2bs: <End>(next: {
    bytes: (bytes: Iterable<number>) => void;
    end?: () => End;
}) => {
    codePoint: CodePointHandler,
    end: () => End,
};