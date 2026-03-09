export interface Keybinding {
  keys: string;
  action: string;
}

export const keybindings: Keybinding[] = [
  { keys: "\u2191 / k  \u2193 / j", action: "Navigate lessons or scroll history" },
  { keys: "Enter", action: "Start selected lesson" },
  { keys: "h", action: "Open session history" },
  { keys: "Ctrl-F", action: "Load a custom text file" },
  { keys: "Ctrl-R", action: "Restart current lesson" },
  { keys: "Esc", action: "Return to menu / quit" },
  { keys: "r", action: "Restart after completion" },
];
