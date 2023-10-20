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

  // palette: {
  //   primary: {
  //     dark: '#b16666',
  //     main: '#FD9292', // 0, 18, 100
  //     light: '#fda7a7',
  //     contrastText: '#000000',
  //   },
  //   secondary: {
  //     dark: '#66b070',
  //     main: '#92fca1', // 128 18 100
  //     light: '#a7fcb3',
  //     contrastText: '#000000',
  //   },
  // },
  typography: {
    fontFamily: ['"M PLUS Rounded 1c"'].join(','),
  },
})

export default defaultTheme
