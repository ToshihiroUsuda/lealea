import { Box } from '@mui/material'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Column, Description, Title } from '../../components/common/styledComponents'
import Background from '../../components/shell/background'
import Layout from '../../components/shell/layout'
import { getTopMessage } from '../../libs/message'

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

const VisionPage: NextPage<Props> = ({ message }: { message: string }) => {
  const sentences = message.split('\n')
  const fontFamily = ['Noto Serif JP'].join(',')

  return (
    <Layout background>
      <Head>
        <title>Lea Lea（レアレア） ~ 私たちの想い ~</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 } }}>
        <Box sx={{ position: 'relative' }}>
          {/* <Image src='/LP1.png' alt='企業理念' fill style={style} /> */}
          <Background>
            <Column alignItems='center'>
              <Title sx={{ fontFamily: fontFamily, pb: 4 }}>私たちの想い</Title>
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 180, sm: 240 },
                  height: { xs: 180, sm: 240 },
                }}
              >
                <Image
                  src='/assets/precident.png'
                  alt='代表'
                  fill
                  style={{ objectFit: 'cover', borderRadius: 120 }}
                />
              </Box>
              <Box pt={4}>
                {sentences.map((sentence, index) => (
                  <Description key={index} fontFamily={fontFamily} pt={sentence !== '' ? 1 : 2}>
                    {sentence}
                  </Description>
                ))}
              </Box>
            </Column>
          </Background>
        </Box>
      </Box>
    </Layout>
  )
}

export default VisionPage
