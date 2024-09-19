import { grey, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#242424'
        },
        fail:{
            main: red[500],
        },
        secondary: {
            main: '#ffffff'
        },
        primary: {
            main: '#f0ffff'
        }

      },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff'
        },
        fail:{
            main: red[500],
        },

      },
});