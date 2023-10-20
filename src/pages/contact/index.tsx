import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

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
        <InquiryForm />
      </Box>
    </Layout>
  )
}

export default Contact
