export interface LayoutLesson {
  num: number;
  name: string;
  qwerty: string;
  dvorak: string;
  colemak: string;
}

export interface SharedLesson {
  num: number;
  name: string;
  detail: string;
}

export const layoutLessons: LayoutLesson[] = [
  { num: 1, name: "Index Keys", qwerty: "f j", dvorak: "u h", colemak: "t n" },
  { num: 2, name: "Middle Keys", qwerty: "d k (+ f j)", dvorak: "e t (+ u h)", colemak: "s e (+ t n)" },
  { num: 3, name: "Ring & Pinky", qwerty: "s l ; (+ f j d k)", dvorak: "o n s (+ a)", colemak: "r i o (+ a)" },
  { num: 4, name: "Home Row", qwerty: "a s d f j k l ;", dvorak: "a o e u i d h t n s", colemak: "a r s t d h n e i o" },
  { num: 5, name: "Home Reach", qwerty: "g h", dvorak: "i d", colemak: "d h" },
  { num: 6, name: "Top Intro", qwerty: "e i r u", dvorak: "p c r l", colemak: "f p l u" },
  { num: 7, name: "Top Row", qwerty: "q w e r t y u i o p", dvorak: "' , . p y f g c r l", colemak: "q w f p g j l u y ;" },
  { num: 8, name: "Bottom Row", qwerty: "z x c v b n m , .", dvorak: "; q j k x b m w v z", colemak: "z x c v b k m , ." },
  { num: 9, name: "All Letters", qwerty: "Pangrams", dvorak: "Pangrams", colemak: "Pangrams" },
];

export const sharedLessons: SharedLesson[] = [
  { num: 10, name: "Capitals & Shift", detail: "Mixed case" },
  { num: 11, name: "0\u20139 Numbers", detail: "Numbers in context" },
  { num: 12, name: "Punctuation & Symbols", detail: "Special characters" },
  { num: 13, name: "Common Words", detail: "High-frequency words" },
  { num: 14, name: "Full Paragraphs", detail: "Real-world text" },
  { num: 15, name: "Code (Rust)", detail: "Programming syntax" },
];
