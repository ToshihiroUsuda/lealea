import {
  ArrowBack as ArrowBackIcon,
  Close as CloseIcon,
  Home as HomeIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import { AppBar, Box, Button,Container, Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Head from 'next/head'
import Link from 'next/link'
import React, {useState} from 'react'

import InquiryButton from '../inquiry/inquiryButton'

interface ILayoutProps extends React.PropsWithChildren{
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
        <meta name='description' content='JIZAI Labo' />
      </Head>
          <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            className='md:hidden'
            aria-label='more'
            onClick={() => setIsOpen(!isOpen)}
            size='large'
            edge='end'
          >
            {isOpen && <CloseIcon />}
            {!isOpen && <MenuIcon />}
          </IconButton>
            <List className='md:ml-auto md:flex'>
              <ListItem disablePadding>
                <Link href='/'>
                  <ListItemButton className='text-gray-800 hover:text-teal-500'>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary='HOME' />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link href='/contact'>
                  <ListItemButton className='text-gray-800 hover:text-teal-500'>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary='CONTACT' />
                  </ListItemButton>
                </Link>
              </ListItem>
              </List>
        </Toolbar>
      </AppBar>
      <Container>
        {props.children}
          {props.needInquiry && <InquiryButton />}
          {!props.home && (
            <div className='mx-2 border-t border-teal-500 py-6 text-xl hover:text-teal-500 md:mx-20'>
              <Link href='/'>
                <Button
                  className='text-gray-800 hover:text-teal-500'
                  variant='text'
                  startIcon={<ArrowBackIcon />}
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          )}
      </Container>
      <Box>
        
      </Box>
    </Box>
    </>

      
  )
}

export default Layout
