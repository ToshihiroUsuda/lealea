import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { Title } from '../../components/common/styledComponents'
import Layout from '../../components/shell/layout'
import { getAllMarkdowns, getContent } from '../../libs/terms_of_service'

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

const TermsOfServicePage: NextPage<{ content: string }> = (props) => {
  return (
    <Layout>
      <Head>
        <title>利用規約 家事代行を利用したい方</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 }, px: 2 }}>
        <Title pt={4} variant='h3'>
          利用規約
        </Title>
        <Box sx={{ px: { xs: 2, sm: 10 }, pt: 8, fontSize: { xs: 10, sm: 16 } }}>
          <ReactMarkdown>{props.content}</ReactMarkdown>
        </Box>
      </Box>
    </Layout>
  )
}

export default TermsOfServicePage
