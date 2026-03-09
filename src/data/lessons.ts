export interface Lesson {
  num: number;
  name: string;
  detail: string;
}

export const lessons: Lesson[] = [
  { num: 1, name: "f j", detail: "Index fingers" },
  { num: 2, name: "d k", detail: "Index + middle" },
  { num: 3, name: "s l ;", detail: "Ring + pinky" },
  { num: 4, name: "a s d f j k l ;", detail: "Full home row" },
  { num: 5, name: "g h", detail: "Home row complete" },
  { num: 6, name: "e i r u", detail: "Top row reach" },
  { num: 7, name: "q w e r t y u i o p", detail: "Full top row" },
  { num: 8, name: "z x c v b n m , .", detail: "Bottom row" },
  { num: 9, name: "All Letters", detail: "Pangrams" },
  { num: 10, name: "Capitals & Shift", detail: "Mixed case" },
  { num: 11, name: "0\u20139 Numbers", detail: "Numbers in context" },
  { num: 12, name: "Punctuation & Symbols", detail: "Special characters" },
  { num: 13, name: "Common Words", detail: "High-frequency words" },
  { num: 14, name: "Full Paragraphs", detail: "Real-world text" },
  { num: 15, name: "Code (Rust)", detail: "Programming syntax" },
];
