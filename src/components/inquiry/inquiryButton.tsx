// import Button from '@mui/material/Button'
import { Mail as MailIcon } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'

import Link from '../common/link'

const InquiryButton = () => {
  return (
    <Box
      role='presentation'
      sx={{
        position: 'fixed',
        bottom: { xs: 32, sm: 48 },
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <Link href='/contact'>
        <Fab
          variant='extended'
          color='primary'
          aria-label='add'
          sx={{
            p: { xs: 3, sm: 4 },
            color: 'black',
            borderRadius: 100,
            width: 240,
            background: 'linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
          }}
        >
          <MailIcon />
          <Typography pl={1}>お問い合わせ</Typography>
        </Fab>
      </Link>
    </Box>
  )
}

export default InquiryButton
