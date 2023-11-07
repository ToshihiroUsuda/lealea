import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Column } from '../../components/common/styledComponents'
import Layout from '../../components/shell/layout'
import InquiryForm from './inquiryForm'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>お問い合わせ</title>
      </Head>
      <Box sx={{ pt: 12, pb: 8 }}>
        <Typography sx={{ py: 4, fontWeight: 'bold', fontSize: { xs: 36, sm: 48 } }} variant='h3'>
          お問い合せ
        </Typography>
        <Column px={4}>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 }, py: 2 }}>
            Lea Lea 公式LINEをお友達追加、もしくは下記
            お問い合わせフォームからお問い合わせください。
          </Typography>
          <Typography sx={{ fontSize: { xs: 20, sm: 32 }, py: 4, fontWeight: 'bold' }}>
            公式LINE
          </Typography>
          <Column alignItems='center'>
            <Link href='https://lin.ee/5ngDh7K'>
              <Box
                position='relative'
                width={200}
                height={48}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <Image
                  src='/material/add_friend.png'
                  alt='友だち追加'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
              <Box
                position='relative'
                width={200}
                height={200}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                <Image
                  src='/material/add_friend_qr.png'
                  alt='友だち追加'
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            </Link>
            <Column alignItems='center' width={640} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography pb={1} fontSize={20} fontWeight={'bold'}>
                QRコードでLINEの友だちを追加
              </Typography>
              <Typography textAlign={'center'}>
                LINEアプリの友だちタブを開き、画面右上にある友だち追加ボタン＞[QRコード]を
                タップして、コードリーダーでスキャンしてください。
              </Typography>
            </Column>
          </Column>
          <Typography sx={{ fontSize: { xs: 20, sm: 32 }, py: 4, fontWeight: 'bold' }}>
            お問い合わせフォーム
          </Typography>
          <InquiryForm />
        </Column>
      </Box>
    </Layout>
  )
}

export default Contact
