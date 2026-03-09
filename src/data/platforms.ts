export interface Platform {
  icon: string;
  name: string;
  description: string;
}

export const platforms: Platform[] = [
  {
    icon: "\uF8FF",
    name: "macOS",
    description: "Native support with \u2318 \u2325 \u2303 modifier keys",
  },
  {
    icon: "\uD83D\uDC27",
    name: "Linux",
    description: "Full support on X11 and Wayland terminals",
  },
  {
    icon: "\u229E",
    name: "Windows",
    description: "Works with Win, Alt, and Ctrl modifier keys",
  },
];
