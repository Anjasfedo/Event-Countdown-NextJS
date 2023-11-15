export const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i"] as const;

export type Alphabet = (typeof alphabets)[number];
