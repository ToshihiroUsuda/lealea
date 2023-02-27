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
// import Link from 'next/link'
import React, { useState } from 'react'

import Link from '../common/link'
import InquiryButton from '../inquiry/inquiryButton'

interface ILayoutProps extends React.PropsWithChildren {
  home?: boolean
  needInquiry?: boolean
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
  const [isOpen, setIsOpen] = useState(false)
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
        <meta name='description' content='オンラインダイエットコンサル KOA consulting farm' />
      </Head>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            top: 0,
            zIndex: 10,
            position: 'fixed',
            height: '64px',
            display: 'flex',
            justifyContent: 'center',
          }}
          position='static'
          elevation={0}
        >
          <Toolbar>
            <Typography variant='h6' color='white' sx={{ flexGrow: 1 }}>
              KOA Consulting Farm
            </Typography>
            <IconButton
              sx={{
                display: { xs: 'block', sm: 'none' },
                color: 'white',
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
                  bgcolor: 'primary.main',
                }}
              >
                <ListItem disablePadding>
                  <Link href='/'>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: 'white' }}>
                        <HomeIcon />
                      </ListItemIcon>
                      <Typography sx={{ color: 'white' }}>HOME</Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
                <ListItem disablePadding>
                  <Link href='/contact'>
                    <ListItemButton>
                      <ListItemIcon sx={{ color: 'white' }}>
                        <MailIcon />
                      </ListItemIcon>
                      <Typography sx={{ color: 'white' }}>CONTACT</Typography>
                    </ListItemButton>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Toolbar>
        </AppBar>
        <Container>
          <Box pt={6}>{props.children}</Box>
          {props.needInquiry && <InquiryButton />}
          {!props.home && (
            <Box
              sx={{
                borderTopWidth: 1,
                borderColor: 'text.main',
              }}
            >
              <Link href='/'>
                <Button variant='text' startIcon={<ArrowBackIcon />}>
                  <Typography color='primary'>Back to Home</Typography>
                </Button>
              </Link>
            </Box>
          )}
        </Container>
        <Box></Box>
      </Box>
    </>
  )
}

export default Layout
