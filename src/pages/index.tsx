import { Box, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import Background from '../components/shell/background'
import Layout from '../components/shell/layout'
import { getTopMessage } from '../libs/message'

const style: React.CSSProperties = {
  objectFit: 'contain',
  objectPosition: 'top',
}

type Props = {
  message: string
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const message = getTopMessage()
  return {
    props: {
      message,
    },
  }
}

const Home: NextPage<Props> = ({ message }: { message: string }) => {
  const sentences = message.split('\n')
  const fontFamily = ['Noto Serif JP'].join(',')
  return (
    <Layout home needInquiry>
      <Head>
        <title>Lea Lea（レアレア） 〜がんばるあなたに、よろこびを〜</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 } }}>
        <Box sx={{ position: 'relative' }}>
          {/* <Image src='/LP1.png' alt='企業理念' fill style={style} /> */}
          <Background>
            <Typography fontSize={{ xs: 40, sm: 48 }} fontFamily={fontFamily}>
              私たちの想い
            </Typography>
            <Box pt={6}>
              {sentences.map((sentence, index) => (
                <Typography
                  key={index}
                  fontFamily={fontFamily}
                  fontSize={{ xs: 20, sm: 24 }}
                  pt={sentence !== '' ? 1 : 2}
                >
                  {sentence}
                </Typography>
              ))}
            </Box>
          </Background>
        </Box>
      </Box>
    </Layout>
  )
}

export default Home
