import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../components/shell/layout'

const style: React.CSSProperties = {
  objectFit: 'contain',
  objectPosition: 'top',
}

const Home: NextPage = () => {
  return (
    <Layout home needInquiry>
      <Head>
        <title>Lea Lea</title>
      </Head>
      <Box sx={{ pt: 8, pb: 16 }}>
        <Box sx={{ position: 'relative', height: 'min(141vw, 160vh)' }}>
          <Image src='/LP/lp1.png' alt='lp1' fill style={style} />
        </Box>
        <Box sx={{ position: 'relative', height: 'min(141vw, 160vh)' }}>
          <Image src='/LP/lp2.png' alt='lp2' fill style={style} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
