import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#242424',
            darker: '#3b3b3b',

        },
        fail:{
            main: red[500],
        },
        secondary: {
            main: '#ffffff'
        },
        primary: {
            main: '#f0ffff'
        },
        tableHeader:{
            main: '#242424',
            light: '#3b3b3b',
            dark: '#3b3b3b',
            contrastText: '#3b3b3b'
        }
      },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#ffffff',
            darker: '#ecebeb'

        },
        fail:{
            main: red[500],
        },
        tableHeader:{
            main: '#ffffff',
            light: '#ecebeb',
            dark: '#3b3b3b',
            contrastText: '#3b3b3b'
        }

      },
});