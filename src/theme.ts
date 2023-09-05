import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    primary: {
      dark: '#b16666',
      main: '#FD9292',
      light: '#fda7a7',
      contrastText: '#000000',
    },
    secondary: {
      dark: '#92b194',
      main: '#D1FED4',
      light: '#dafedc',
      contrastText: '#000000',
    },
  },
})

export default defaultTheme
