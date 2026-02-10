// Theme configuration for StyledProvider (Gluestack token resolution)
// This is a separate config from the CSS variables config

const GOLD_SCALE = [
  '#fff0be', // 0
  '#fadc8c', // 50
  '#f5d26e', // 100
  '#f0cd5a', // 200
  '#eecb50', // 300
  '#ecc94b', // 400
  '#ecc94b', // 500 ⭐ Main Anchor Gold
  '#c8aa3c', // 600
  '#a0822d', // 700
  '#785a1e', // 800
  '#50380f', // 900
  '#3c280a', // 950
];

const TEAL_SCALE = [
  '#dcffff', // 0
  '#aae6dc', // 50
  '#78c8be', // 100
  '#5ab4aa', // 200
  '#3ca09b', // 300
  '#379596', // 400
  '#319595', // 500 ⭐ Main Anchor Teal
  '#287878', // 600
  '#236464', // 700
  '#1e5050', // 800
  '#143232', // 900
  '#0f1e1e', // 950
];

export const theme = {
  colors: {
    primary: {
      0: GOLD_SCALE[0],
      50: GOLD_SCALE[1],
      100: GOLD_SCALE[2],
      200: GOLD_SCALE[3],
      300: GOLD_SCALE[4],
      400: GOLD_SCALE[5],
      500: GOLD_SCALE[6],
      600: GOLD_SCALE[7],
      700: GOLD_SCALE[8],
      800: GOLD_SCALE[9],
      900: GOLD_SCALE[10],
      950: GOLD_SCALE[11],
    },
    secondary: {
      0: TEAL_SCALE[0],
      50: TEAL_SCALE[1],
      100: TEAL_SCALE[2],
      200: TEAL_SCALE[3],
      300: TEAL_SCALE[4],
      400: TEAL_SCALE[5],
      500: TEAL_SCALE[6],
      600: TEAL_SCALE[7],
      700: TEAL_SCALE[8],
      800: TEAL_SCALE[9],
      900: TEAL_SCALE[10],
      950: TEAL_SCALE[11],
    },
    tertiary: {
      0: '#543112',
      500: '#fb9d4b',
      950: '#fffaf5',
    },
    error: {
      500: '#ef4444',
    },
    success: {
      500: '#489766',
    },
    warning: {
      500: '#fb954b',
      
    },
    info: {
      500: '#32b4f4',
    },
    typography: {
      0: '#171717',
      50: '#323232',
      500: '#b4b4b4',
      950: '#f7fafc',
    },
    outline: {
      0: '#1a1717',
      500: '#3c3c3c',
      950: '#f0f0f0',
    },
    background: {
      0: '#121212',
      50: '#1a202c',
      500: '#414040',
      950: '#f6f6f6',
      error: '#422b2b',
      warning: '#412f23',
      success: '#1c2b21',
      muted: '#282828',
      info: '#1a282e',
    },
    indicator: {
      primary: GOLD_SCALE[6],
      info: '#a1c7f5',
      error: '#e84645',
    },
  },
  tokens: {
    colors: {
      'background-50': '#1a202c',
      'background-500': '#414040',
      'background-950': '#f6f6f6',
      'typography-950': '#f7fafc',
      'secondary-500': TEAL_SCALE[6],
      'primary-500': GOLD_SCALE[6],
    },
  },
};
