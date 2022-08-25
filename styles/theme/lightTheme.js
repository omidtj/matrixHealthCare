import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'NotoSans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'NotoSans';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
      }
    `,
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#031b2e',//darkblue
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6d1b7b',//purple
      main:  '#2c387e',//blue
      dark: '#7f2a30',//red
      contrastText: '#000',
    },
  }
});

export default lightTheme;