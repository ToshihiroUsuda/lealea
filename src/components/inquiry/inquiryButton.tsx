import { Mail as MailIcon } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { useCallback, useEffect, useState } from 'react'

import Link from '../common/link'
import { Description } from '../common/styledComponents'

const defaultBottom = 48
const headerHeight = 280

const InquiryButton = () => {
  const [bottom, setBottom] = useState(defaultBottom)

  const changeBottom = useCallback(() => {
    const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight)
    if (bottomPosition < headerHeight) {
      setBottom(defaultBottom + headerHeight - bottomPosition)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', changeBottom)
    return () => window.removeEventListener('scroll', changeBottom)
  }, [changeBottom])

  return (
    <Box
      role='presentation'
      sx={{
        position: 'fixed',
        bottom: bottom,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}
    >
      <Link href='/contact'>
        <Fab
          variant='extended'
          color='secondary'
          aria-label='add'
          sx={{
            p: { xs: 3, sm: 4 },
            // color: 'black',
            borderRadius: 100,
            width: 240,
            // background: 'linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
          }}
        >
          <MailIcon />
          <Description pl={1}>お問い合わせ</Description>
        </Fab>
      </Link>
    </Box>
  )
}

export default InquiryButton
