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
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>子育てを終え</Typography>
                <Typography sx={{ fontSize: { xs: 16, sm: 20 } }}>地域に貢献したい</Typography>
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
          <Typography
            textAlign={'center'}
            sx={{ fontSize: { xs: 32, sm: 48 } }}
            fontSize={48}
            fontWeight={'bold'}
          >
            ともに輝ける
          </Typography>
          <Typography
            textAlign={'center'}
            sx={{ fontSize: { xs: 32, sm: 48 } }}
            fontSize={48}
            fontWeight={'bold'}
          >
            地域へ！
          </Typography>
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

type LinkButtonProps = {
  linkUrl: string
  imageUrl: string
  buttonColor: 'primary' | 'secondary'
  buttonText: string
}

const LinkButton: React.FC<LinkButtonProps> = ({ linkUrl, imageUrl, buttonColor, buttonText }) => {
  return (
    <Box p={1}>
      <Link href={linkUrl}>
        <Button
          variant='contained'
          color={buttonColor}
          sx={{
            pb: 2,
            px: 2,
            color: 'black',
            borderRadius: 10,
            height: { xs: 200, sm: 280 },
            width: { xs: 160, sm: 240 },
            flexDirection: 'column',
            justifyContent: 'end',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: { xs: 120, sm: 200 },
              height: { xs: 120, sm: 200 },
              top: '10%',
              borderRadius: '50%',
              bgcolor: 'white',
              position: 'absolute',
            }}
          >
            <Image src={imageUrl} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 24 },
            }}
          >
            {buttonText}
          </Typography>
        </Button>
      </Link>
    </Box>
  )
}
