import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FlexBox = styled(Box)({
  display: 'flex',
})

export const Column = styled(FlexBox)({
  flexDirection: 'column',
})

export const Row = styled(FlexBox)({
  flexDirection: 'row',
})

export const TypoMPlus = styled(Typography)({
  fontFamily: ['"M PLUS Rounded 1c"'].join(','),
})

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 28,
  [theme.breakpoints.up('sm')]: {
    fontSize: 40,
  },
  fontWeight: 'bold',
}))

export const Description = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  [theme.breakpoints.up('sm')]: {
    fontSize: 20,
  },
}))
