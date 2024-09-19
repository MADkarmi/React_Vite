import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    export interface Palette {
      fail: Palette['primary'];
      tableHeader: Palette['primary'];
    }

    export interface PaletteOptions {
      fail?: PaletteOptions['primary'];
      tableHeader?: Palette['primary'];
    }
  }