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
        <title>Lea Lea（レアレア） 〜がんばるあなたに、よろこびを〜</title>
      </Head>
      <Box sx={{ pt: 4, pb: 20 }}>
        <Box sx={{ position: 'relative', height: 'min(141vw, 160vh)' }}>
          <Image src='/LP1.png' alt='企業理念' fill style={style} />
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
