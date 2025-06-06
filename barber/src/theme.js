import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#1e1e1e', paper: '#272727' },
    primary: { main: '#64dd17' },
    secondary: { main: '#9ccc65' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform .2s',
          '&:hover': { transform: 'scale(1.05)' },
        },
      },
    },
  },
});

export default theme;
