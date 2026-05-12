export const VALID_APPLICATION_STATUSES = [
	'To Apply',
	'Applied',
	'Interviewing',
	'Offer',
	'Rejected',
] as const;


export const BENCH_THEMES = [
  {
    id: "genshin",
    name: "Genshin Impact",
    light: {
      background: "#fdfaf3",
      foreground: "#4b443c",
      primary: "#d4ad68",
      secondary: "#5e9296",
      muted: "#f3ede0",
      border: "#e6ddd0",
      card: "#ffffff",
    },
    dark: {
      background: "#1a1814",
      foreground: "#ece5d8",
      primary: "#e6c17a",
      secondary: "#74b5ba",
      muted: "#2d2924",
      border: "#3d372e",
      card: "rgba(255,255,255,0.05)",
    }
  },
  {
    id: "hsr",
    name: "Honkai: Star Rail",
    light: {
      background: "#f8f7ff",
      foreground: "#3d3a52",
      primary: "#7c5dfa",
      secondary: "#4facfe",
      muted: "#efedff",
      border: "#e0def7",
      card: "#ffffff",
    },
    dark: {
      background: "#0f0e17",
      foreground: "#e0def7",
      primary: "#a389ff",
      secondary: "#00d2ff",
      muted: "#252336",
      border: "#33314a",
      card: "rgba(255,255,255,0.05)",
    }
  },
  {
    id: "zzz",
    name: "Zenless Zone Zero",
    light: {
      background: "#fefce8",
      foreground: "#18181b",
      primary: "#facc15",
      secondary: "#f43f5e",
      muted: "#fef9c3",
      border: "#e4e4e7",
      card: "#ffffff",
    },
    dark: {
      background: "#09090b",
      foreground: "#facc15", 
      primary: "#fef08a",
      secondary: "#fb7185", 
      muted: "#27272a",
      border: "#3f3f46",
      card: "rgba(255,255,255,0.05)",
    }
  }
] as const;