export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: "~",
    title: "15 Progressive Lessons",
    description:
      "From home-row basics to full paragraphs and Rust code. Lessons are ordered by difficulty so you build skills gradually. The menu auto-advances to your next unfinished lesson.",
  },
  {
    icon: ">_",
    title: "Live Stats",
    description:
      "WPM, accuracy, elapsed time, and keystroke counts update as you type. A completion summary highlights your weakest keys so you know what to practice next.",
  },
  {
    icon: "\u2328",
    title: "Virtual Keyboard",
    description:
      "An on-screen keyboard highlights the next expected key in real time. Finger hints (Pinky, Ring, Middle, Index, Thumb) help you learn proper hand placement. Adapts to macOS and PC layouts.",
  },
  {
    icon: "\u2193",
    title: "Session History",
    description:
      "Results are saved to ~/.clavirio/history.json automatically. Browse past sessions, view per-lesson averages, and track your improvement over time.",
  },
  {
    icon: "\u270E",
    title: "Custom Texts",
    description:
      "Load any text file with Ctrl-F or pass it as a CLI argument. Practice typing with your own content \u2014 code, prose, anything.",
  },
  {
    icon: "\u2713",
    title: "Just Works",
    description:
      "No config files, no accounts, no internet needed. A single binary \u2014 install it, run it, start typing. Sessions are saved on exit, even on SIGTERM.",
  },
];
