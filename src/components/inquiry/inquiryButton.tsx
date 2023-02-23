// import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'

import Link from '../common/link'

const InquiryButton = () => {
  return (
    <Box
      role='presentation'
      sx={{ position: 'absolute', bottom: 64, left: '50%', transform: 'translateX(-50%)' }}
    >
      <Link href='/contact'>
        <Fab variant='extended' color='primary' aria-label='add'>
          <Typography variant='h6'>お問い合せ</Typography>
        </Fab>
      </Link>
    </Box>
  )
}

export default InquiryButton
