import { ArrowDownwardTwoTone } from '@mui/icons-material'
import { Button, Paper, Typography } from '@mui/material'
import React from 'react'

import Link from '../../components/common/link'
import { Column, Row } from '../../components/common/styledComponents'

const FlowBlock: React.FC<{ needArrow?: boolean } & React.PropsWithChildren> = (props) => {
  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          my: 2,
          width: '100%',
          height: 80,
          bgcolor: 'primary.main',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
      >
        {props.children}
      </Paper>

      {props.needArrow && <ArrowDownwardTwoTone fontSize='large' />}
    </>
  )
}

const Flow: React.FC = () => {
  return (
    <Row py={2} justifyContent={'center'}>
      <Column minWidth={320} sx={{ width: '70%', alignItems: 'center' }}>
        <FlowBlock needArrow>
          <Link href='https://lin.ee/5ngDh7K'>
            <Button variant='text' color='info'>
              <Typography pl={1} sx={{ fontSize: { xs: 16, sm: 24 } }}>
                Lea Lea 公式Line
              </Typography>
            </Button>
          </Link>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>をお友達追加</Typography>
        </FlowBlock>

        <FlowBlock needArrow>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>
            運営から届くアンケートに回答
          </Typography>
        </FlowBlock>
        <FlowBlock needArrow>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>
            スタッフと日時・作業内容を調整
          </Typography>
        </FlowBlock>
        <FlowBlock>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>家事代行当日！</Typography>
        </FlowBlock>
      </Column>
    </Row>
  )
}

export default Flow
