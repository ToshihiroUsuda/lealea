import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { Column, Description, Row, Title } from '../../components/common/styledComponents'
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
      <Box sx={{ py: { xs: 12, sm: 20 }, px: 1 }}>
        <Title pt={4} variant='h3'>
          コンセプト
        </Title>
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

          <Description>たまった家事を、家事業のプロの先輩ママにやってもらうことで、</Description>
          <Description>空いた時間を子供と向き合う時間にあてよう！！</Description>
        </Column>

        <Title pt={6} variant='h3'>
          お客様の声
        </Title>
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

        <Title pt={6} variant='h3'>
          料金表
        </Title>
        <Column sx={{ pt: 4, alignItems: 'center' }}>
          <PriceTable />
        </Column>

        <Title pt={6} variant='h3'>
          利用開始までの流れ
        </Title>
        <Flow />
      </Box>
    </Layout>
  )
}

export default CustomerPage
