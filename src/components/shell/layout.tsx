import {
  ArrowBack as ArrowBackIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Head from 'next/head'
import Image from 'next/image'
// import Link from 'next/link'
import React, { useState } from 'react'

import Link from '../common/link'
import InquiryButton from '../inquiry/inquiryButton'

const style: React.CSSProperties = {
  objectFit: 'cover',
}

interface ILayoutProps extends React.PropsWithChildren {
  home?: boolean
  background?: boolean
  needInquiry?: boolean
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='description' content='Lea Lea' />
      </Head>

      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Header />
        {props.background && (
          <Box sx={{ position: 'fixed', width: '100vw', height: '100vh', zIndex: -50 }}>
            <Image
              src='/background.png'
              alt='background image'
              quality={100}
              sizes='100vw'
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
        )}
        <Container>
          <Box pt={6}>{props.children}</Box>
          {props.needInquiry && <InquiryButton />}
          {!props.home && (
            <Box
              sx={{
                borderTopWidth: 1,
                borderColor: 'text.main',
                pb: 6,
              }}
            >
              <Link href='/'>
                <Button variant='text' color='info' startIcon={<ArrowBackIcon />}>
                  <Typography>ホームに戻る</Typography>
                </Button>
              </Link>
            </Box>
          )}
        </Container>
        <Footer />
      </Box>
    </>
  )
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <AppBar
      sx={{
        top: 0,
        zIndex: 10,
        position: 'fixed',
        height: '64px',
        display: 'flex',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
      }}
      position='static'
      elevation={0}
    >
      <Toolbar>
        <Image src='/icon.png' alt='Lea Lea' width={48} height={48} />
        <Typography color='black' sx={{ pl: 2, flexGrow: 1, fontWeight: 'bold' }}>
          子育て支援事業 Lea Lea
        </Typography>
        <IconButton
          sx={{
            display: { xs: 'block', sm: 'none' },
            color: 'black',
          }}
          aria-label='more'
          onClick={() => setIsOpen(!isOpen)}
          size='large'
          edge='end'
        >
          {isOpen && <CloseIcon />}
          {!isOpen && <MenuIcon />}
        </IconButton>
        <Box
          sx={{
            display: isOpen ? 'block' : { xs: 'none', sm: 'block' },
            position: { xs: 'fixed', sm: 'relative' },
            left: 0,
            top: { xs: '64px', sm: 0 },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <List
            sx={{
              ml: { xs: 0, sm: 'auto' },
              display: { xs: 'block', sm: 'flex' },
              background: {
                xs: 'linear-gradient(90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
                sm: 'rgba(255, 255, 255, 0)',
              },
            }}
          >
            <ListItem disablePadding>
              <Link href='/'>
                <ListItemButton>
                  <ListItemIcon sx={{ color: 'black' }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <Typography sx={{ color: 'black' }}>ホーム</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <Link href='/contact'>
                <ListItemButton sx={{ width: 200 }}>
                  <ListItemIcon sx={{ color: 'black' }}>
                    <MailIcon />
                  </ListItemIcon>
                  <Typography sx={{ color: 'black' }}>お問い合わせ</Typography>
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

const Footer = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(-90deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
        py: 1,
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link href='/'></Link>
        <Image src='/icon.png' alt='Lea Lea' width={48} height={48} />
        <Box sx={{ pt: '4px', textAlign: 'center' }}>
          <Link href='/vision'>
            <Typography fontSize={12} color='white'>
              私たちの想い
            </Typography>
          </Link>
          <Link href='/scta'>
            <Typography fontSize={12} color='white'>
              特定商取引法に基づく表記
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
