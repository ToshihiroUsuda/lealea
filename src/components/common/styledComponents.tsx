import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'

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
