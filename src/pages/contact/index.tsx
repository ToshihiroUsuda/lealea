import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Head from 'next/head'

import InquiryForm from '../../components/inquiry/inquiryForm'
import Layout from '../../components/shell/layout'

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <Box sx={{ pt: 12, pb: 8 }}>
        <Typography sx={{ py: 4 }} variant='h3'>
          お問い合せ
        </Typography>
        <InquiryForm />
      </Box>
    </Layout>
  )
}

export default Contact
