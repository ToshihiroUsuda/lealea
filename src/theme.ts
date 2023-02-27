import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    primary: {
      light: '#68ce92',
      main: '#339c64',
      dark: '#006d39',
      contrastText: '#FFFFFF',
    },
  },
})

export default defaultTheme
