import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    primary: {
      dark: '#b29292',
      main: '#ffd1d1', // 0, 18, 100
      light: '#ffdada',
      contrastText: '#000000',
    },
    secondary: {
      dark: '#92b194',
      main: '#D1FED4', // 128 18 100
      light: '#dafedc',
      contrastText: '#000000',
    },
  },

  typography: {
    fontFamily: ['"M PLUS Rounded 1c"'].join(','),
  },
})

export default defaultTheme
