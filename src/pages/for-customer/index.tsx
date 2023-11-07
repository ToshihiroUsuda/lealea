import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Column, Row } from '../../components/common/styledComponents'
import Layout from '../../components/shell/layout'
import CustomerVoice from './customerVoice'
import Flow from './flow'
import PriceTable from './table'

const CustomerPage: NextPage = () => {
  return (
    <Layout needInquiry>
      <Head>
        <title>子育て支援事業Lea Lea（レアレア） 家事代行を利用したい方</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 }, px: 2 }}>
        <Typography pt={4} variant='h3' fontWeight={'bold'} sx={{ fontSize: { xs: 36, sm: 48 } }}>
          コンセプト
        </Typography>
        <Column sx={{ alignItems: 'center' }}>
          <Row>
            <Box
              position='relative'
              sx={{ width: { xs: 120, sm: 200 }, height: { xs: 160, sm: 240 } }}
            >
              <Image
                src='/assets/Beginer6.png'
                alt='新米ママ'
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <Box
              position='relative'
              sx={{ width: { xs: 120, sm: 200 }, height: { xs: 160, sm: 240 } }}
            >
              <Image src='/assets/Senior3.png' alt='先輩ママ' fill style={{ objectFit: 'cover' }} />
            </Box>
          </Row>

          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>
            たまった家事を、家事業のプロの先輩ママにやってもらうことで、
          </Typography>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>
            空いた時間を子供と向き合う時間にあてよう！！
          </Typography>
        </Column>

        <Typography pt={6} variant='h3' fontWeight={'bold'} sx={{ fontSize: { xs: 36, sm: 48 } }}>
          お客様の声
        </Typography>
        <Column sx={{ justifyContent: 'center' }}>
          <CustomerVoice
            name='A'
            age={30}
            imageUrl='/assets/Beginer4.png'
            // voice='あああああああああああああああああああああああああああ'
            voice='とても気さくな方でしたが、仕事はプロでした！！また使用したいです。'
            bgcolor='primary'
          />
          <CustomerVoice
            name='B'
            age={30}
            imageUrl='/assets/Beginer7.png'
            // voice='いいいいいいいいいいいいいいいいいいいいいいいいいいい'
            voice='家事を進めてくれたおかげで、子供とたくさん遊ぶ時間ができ幸せでした。'
            bgcolor='primary'
          />
        </Column>

        <Typography pt={6} variant='h3' fontWeight={'bold'} sx={{ fontSize: { xs: 36, sm: 48 } }}>
          料金表
        </Typography>
        <Column sx={{ pt: 4, alignItems: 'center' }}>
          <PriceTable />
        </Column>

        <Typography pt={6} variant='h3' fontWeight={'bold'} sx={{ fontSize: { xs: 36, sm: 48 } }}>
          利用開始までの流れ
        </Typography>
        <Flow />
      </Box>
    </Layout>
  )
}

export default CustomerPage
