import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import Layout from '../../components/shell/layout'
import { getAllMarkdowns, getContent } from '../../libs/privacy_policy'

export const getStaticProps: GetStaticProps = async (context) => {
  const { type } = context.params as { type: string }
  const content = await getContent(type)
  return {
    props: {
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllMarkdowns()
  return {
    paths,
    fallback: false,
  }
}

const PrivacyPolicy: NextPage<{ content: string }> = (props) => {
  return (
    <Layout>
      <Head>
        <title>プライバシーポリシー 家事代行を利用したい方</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 }, px: 2 }}>
        <Typography pt={4} variant='h3' fontWeight={'bold'} sx={{ fontSize: { xs: 36, sm: 48 } }}>
          プライバシーポリシー
        </Typography>
        <Box sx={{ px: { xs: 2, sm: 10 }, pt: 8, fontSize: { xs: 10, sm: 16 } }}>
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </Box>
      </Box>
    </Layout>
  )
}

export default PrivacyPolicy
