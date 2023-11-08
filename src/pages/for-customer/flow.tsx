import { ArrowDownwardTwoTone } from '@mui/icons-material'
import { Button, Paper } from '@mui/material'
import React from 'react'

import Link from '../../components/common/link'
import { Column, Description, Row } from '../../components/common/styledComponents'

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
              <Description pl={1}>Lea Lea 公式Line</Description>
            </Button>
          </Link>
          <Description>をお友達追加</Description>
        </FlowBlock>

        <FlowBlock needArrow>
          <Description>運営から届くアンケートに回答</Description>
        </FlowBlock>
        <FlowBlock needArrow>
          <Description>スタッフと日時・作業内容を調整</Description>
        </FlowBlock>
        <FlowBlock>
          <Description>家事代行当日！</Description>
        </FlowBlock>
      </Column>
    </Row>
  )
}

export default Flow
