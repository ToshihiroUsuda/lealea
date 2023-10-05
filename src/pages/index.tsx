import { Box, Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Link from '../components/common/link'
import { Column, FlexBox, Row } from '../components/common/styledComponents'
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
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>子育ても仕事も</Typography>
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>がんばりたい</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: 24, sm: 32 } }} fontWeight={'bold'}>
                  新米ママと
                </Typography>
              </Box>
            </Column>
            <Column justifyContent='center' mx={1}>
              <Box sx={{ width: 160, height: 240, position: 'relative' }}>
                <Image src='/assets/temp.png' alt='新米ママ' fill style={{ objectFit: 'cover' }} />
              </Box>
            </Column>
          </FlexBox>

          <FlexBox
            flexDirection='row-reverse'
            justifyContent='center'
            alignItems='center'
            height={240}
          >
            <Column mx={1} justifyContent='space-evenly' height='100%'>
              <Box>
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>子育ても仕事も</Typography>
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>がんばりたい</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: { xs: 24, sm: 32 } }} fontWeight={'bold'}>
                  新米ママと
                </Typography>
              </Box>
            </Column>
            <Column justifyContent='center' mx={1}>
              <Box sx={{ width: 160, height: 240, position: 'relative' }}>
                <Image src='/assets/temp.png' alt='新米ママ' fill style={{ objectFit: 'cover' }} />
              </Box>
            </Column>
          </FlexBox>
        </Column>

        <Box sx={{ py: 2 }}>
          <Typography
            textAlign={'center'}
            sx={{ fontSize: { xs: 32, sm: 48 } }}
            fontSize={48}
            fontWeight={'bold'}
          >
            マッチング！！
          </Typography>
        </Box>

        <Box
          sx={{
            py: 8,
            background:
              'radial-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)),linear-gradient(45deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
            borderRadius: 1000,
            maxWidth: 600,
            width: '100%',
          }}
        >
          <Typography
            textAlign={'center'}
            fontWeight={'bold'}
            sx={{ fontSize: { xs: 16, sm: 28 } }}
          >
            子育て支援事業Lea Lea
          </Typography>
          <Typography
            textAlign={'center'}
            fontWeight={'bold'}
            sx={{ fontSize: { xs: 32, sm: 48 } }}
          >
            家事代行サービス
          </Typography>
          <Row sx={{ py: 2, justifyContent: 'center' }}>
            <Box
              position='relative'
              sx={{ width: { xs: 160, sm: 200 }, height: { xs: 120, sm: 150 } }}
            >
              <Image src='/assets/temp.png' alt='新米ママ' fill style={{ objectFit: 'cover' }} />
            </Box>
            <Box
              position='relative'
              sx={{ width: { xs: 160, sm: 200 }, height: { xs: 120, sm: 150 } }}
            >
              <Image src='/assets/temp.png' alt='新米ママ' fill style={{ objectFit: 'cover' }} />
            </Box>
          </Row>
        </Box>

        <Row sx={{ py: 2, justifyContent: 'center', alignItems: 'space-between' }}>
          <Box px={1}>
            <Link href='/for-customer'>
              <Button
                variant='contained'
                sx={{
                  pb: 2,
                  px: 2,
                  color: 'black',
                  borderRadius: 10,
                  width: { xs: 160, sm: 240 },
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'primary.light',
                }}
              >
                <Box sx={{ width: '90%', height: { xs: 160, sm: 240 }, position: 'relative' }}>
                  <Image
                    src='/assets/temp.png'
                    alt='先輩ママ'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>支援したい方</Typography>
              </Button>
            </Link>
          </Box>
          <Box px={1}>
            <Link href='/for-worker'>
              <Button
                variant='contained'
                sx={{
                  pb: 2,
                  px: 2,
                  color: 'black',
                  borderRadius: 10,
                  width: { xs: 160, sm: 240 },
                  flexDirection: 'column',
                  justifyContent: 'center',
                  bgcolor: 'secondary.light',
                }}
              >
                <Box sx={{ width: '90%', height: { xs: 160, sm: 240 }, position: 'relative' }}>
                  <Image
                    src='/assets/temp.png'
                    alt='先輩ママ'
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>支援したい方</Typography>
              </Button>
            </Link>
          </Box>
        </Row>
      </Column>
    </Layout>
  )
}

export default Home
