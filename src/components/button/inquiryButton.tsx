import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import Link from '../common/link'
import { Description } from '../common/styledComponents'

const defaultBottom = 48
const headerHeight = 280

const InquiryButton = () => {
  const [display, setDisplay] = useState('block')

  const changeBottom = useCallback(() => {
    const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight)
    if (bottomPosition < headerHeight) {
      setDisplay('none')
    } else {
      setDisplay('block')
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
        display: display,
        position: 'fixed',
        bottom: defaultBottom,
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
          {/* <MailIcon /> */}
          <Box position='relative' width={{ xs: 16, sm: 20 }} height={{ xs: 16, sm: 20 }}>
            <Image src='/line/icon.png' alt='icon' fill />
          </Box>
          <Description pl={1} fontWeight={'bold'}>
            公式LINE
          </Description>
        </Fab>
      </Link>
    </Box>
  )
}

export default InquiryButton
