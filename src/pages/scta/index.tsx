import Box from '@mui/material/Box'
import styled from '@mui/system/styled'
import Head from 'next/head'

import { Title } from '../../components/common/styledComponents'
import Layout from '../../components/shell/layout'

const Th = styled('th')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  bottom: 0,
  borderStyle: 'solid',
  borderColor: 'white',
  padding: theme.spacing(3),
  display: 'block',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'table-cell',
    width: 200,
  },
}))

const Td = styled('td')(({ theme }) => ({
  bottom: 0,
  borderStyle: 'solid',
  borderColor: 'white',
  padding: theme.spacing(3),
  display: 'block',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    display: 'table-cell',
    width: 'auto',
  },
}))

const SCTAPage = () => {
  return (
    <Layout>
      <Head>
        <meta name='robots' content='noindex,nofollow' />
        <title>特定商取引法に基づく表記</title>
      </Head>
      <Box sx={{ py: 8, px: { xs: 1, sm: 8 } }}>
        <Title variant='h3' sx={{ py: 1 }}>
          特定商取引法に基づく表記
        </Title>
        <Box px={1}>
          <Box sx={{ width: '90%', my: 3, m: 'auto' }}>
            <tr>
              <Th>サービス提供者</Th>
              <Td>Lea Lea</Td>
            </tr>
            <tr>
              <Th>所在地</Th>
              <Td>
                〒244-0817
                <br />
                神奈川県横浜市戸塚区吉田町778-10-732
              </Td>
            </tr>
            <tr>
              <Th>電話番号</Th>
              <Td>080-5185-7237</Td>
            </tr>
            <tr>
              <Th>メールアドレス</Th>
              <Td>lealea.230428@gmail.com</Td>
            </tr>
            <tr>
              <Th>サイト代表者名</Th>
              <Td>臼田 朱里</Td>
            </tr>
            <tr>
              <Th>追加手数料</Th>
              <Td>なし</Td>
            </tr>
            <tr>
              <Th>交換及び返品</Th>
              <Td>止むを得ない事情を除き、原則返金は致しません</Td>
            </tr>
            <tr>
              <Th>受付可能な決済方法</Th>
              <Td>クレジットカード</Td>
            </tr>
            <tr>
              <Th>商品の提供時期</Th>
              <Td>クレジットカード決済が行われた時点でサービス利用開始となります</Td>
            </tr>
            <tr>
              <Th>決済期間</Th>
              <Td>クレジットカード決済が行われた時点で直ちに処理されます</Td>
            </tr>
            <tr>
              <Th>販売価格</Th>
              <Td>月額5,000円 ~ 50,000円(税込)</Td>
            </tr>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default SCTAPage
