import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Primary color
      light: '#6ec6ff', // Lighter shade
      dark: '#0069c0', // Darker shade
    },
    secondary: {
      main: '#ff4081', // Secondary color
      light: '#ff79b0', // Lighter shade
      dark: '#c60055', // Darker shade
    },
    background: {
      default: '#f0f0f0', // Default background color
      paper: '#ffffff', // Paper background color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#666666', // Secondary text color
    },
    nightMode: {
      primary: '#ffffff', // Night mode primary color
      secondary: '#cccccc', // Night mode secondary color
      background: '#121212', // Night mode background color
      textPrimary: '#ffffff', // Night mode text primary color
      textSecondary: '#888888', // Night mode text secondary color
    },
  },
});

export default theme;
