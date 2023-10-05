import { Box, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from '../../components/shell/layout'

const WorkerPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>子育て支援事業Lea Lea（レアレア） 家事代行で働きたい方</title>
      </Head>
      <Box sx={{ py: { xs: 12, sm: 20 } }}>
        <Typography sx={{ fontSize: 48 }}>準備中</Typography>
      </Box>
    </Layout>
  )
}

export default WorkerPage
