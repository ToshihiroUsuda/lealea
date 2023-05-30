import { createTheme } from '@mui/material/styles'

const defaultTheme = createTheme({
  // TODO:テーマ設定を行います
  palette: {
    primary: {
      light: '#68ce92',
      // main: 'linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
      main: '#339c64',
      dark: '#006d39',
      contrastText: '#FFFFFF',
    },
  },
})

export default defaultTheme
