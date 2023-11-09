import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { LinkButton } from '../components/button/linkButton'
import { Column, Description, FlexBox, Row, Title } from '../components/common/styledComponents'
import Layout from '../components/shell/layout'

const Home: NextPage = () => {
  return (
    <Layout home>
      <Head>
        <title>Lea Lea（レアレア）家事代行サービス</title>
      </Head>
      <Column alignItems={'center'} sx={{ py: { xs: 12, sm: 20 } }}>
        <Column sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          {/** 新米ママ*/}
          <FlexBox flexDirection='row' justifyContent='center' alignItems='center' height={240}>
            <Column mx={1} justifyContent='space-evenly' height='100%'>
              <Box>
                <Description>子育ても仕事も</Description>
                <Description>がんばりたい</Description>
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: 24, sm: 32 } }} fontWeight={'bold'}>
                  新米ママと
                </Typography>
              </Box>
            </Column>
            <Column justifyContent='center' mx={1}>
              <Box sx={{ width: 160, height: 240, position: 'relative' }}>
                <Image
                  src='/assets/Beginer6.png'
                  alt='新米ママ'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Column>
          </FlexBox>

          <FlexBox
            flexDirection='row-reverse'
            justifyContent='center'
            alignItems='center'
            height={240}
          >
            <Column mx={1} justifyContent='space-evenly' alignContent='end' height='100%'>
              <Box>
                <Description>子育てを終え</Description>
                <Description>地域に貢献したい</Description>
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: 24, sm: 32 } }} fontWeight={'bold'}>
                  先輩ママが
                </Typography>
              </Box>
            </Column>
            <Column justifyContent='center' mx={1}>
              <Box sx={{ width: 160, height: 240, position: 'relative' }}>
                <Image
                  src='/assets/Senior3.png'
                  alt='先輩ママ'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Column>
          </FlexBox>
        </Column>

        <Box sx={{ py: 2 }}>
          <Title textAlign={'center'}>ともに輝ける</Title>
          <Title textAlign={'center'}>地域へ！</Title>
        </Box>
        <Box>
          <Box
            sx={{
              background:
                'radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.7)),linear-gradient(45deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
              borderRadius: '50%',
              height: { xs: 320, sm: 480 },
              width: { xs: 320, sm: 480 },
              filter: 'blur(20px)',
              position: 'absolute',
            }}
          />
          <Column
            sx={{
              justifyContent: 'center',
              borderRadius: '50%',
              height: { xs: 320, sm: 480 },
              width: { xs: 320, sm: 480 },
            }}
          >
            <Box position='relative'>
              <Typography
                textAlign={'center'}
                fontWeight={'bold'}
                sx={{ fontSize: { xs: 16, sm: 28 } }}
              >
                子育て支援事業Lea Lea
              </Typography>
              <Title textAlign={'center'}>家事代行サービス</Title>
              <Row sx={{ py: 2, justifyContent: 'center' }}>
                <Box
                  position='relative'
                  sx={{ width: { xs: 140, sm: 200 }, height: { xs: 120, sm: 150 } }}
                >
                  <Image
                    src='/assets/Beginer2.png'
                    alt='新米ママ'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box
                  position='relative'
                  sx={{ width: { xs: 140, sm: 200 }, height: { xs: 120, sm: 150 } }}
                >
                  <Image
                    src='/assets/Senior2.png'
                    alt='先輩ママ'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Row>
            </Box>
          </Column>
        </Box>

        <Row sx={{ py: 6, justifyContent: 'center', alignItems: 'space-between' }}>
          <LinkButton
            linkUrl='/for-customer'
            imageUrl='/assets/Beginer3.png'
            buttonColor='primary'
            buttonText='利用したい方'
          />
          <LinkButton
            linkUrl='/for-worker'
            imageUrl='/assets/Senior1.png'
            buttonColor='secondary'
            buttonText='働きたい方'
          />
        </Row>
      </Column>
    </Layout>
  )
}

export default Home
