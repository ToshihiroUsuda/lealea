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
        <Box className='py-20 px-4 md:px-48 md:py-8'>
            <Typography className='py-1' variant='h3'>
            お問い合せ
            </Typography>
            <Box className='m-auto max-w-4xl'>
            <InquiryForm />
            </Box>
        </Box>
    </Layout>
  )
}

export default Contact