import { ArrowDownwardTwoTone, Mail as MailIcon } from '@mui/icons-material'
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
          bgcolor: 'secondary.main',
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
          <Link href='/contact'>
            <Button variant='text' color='info'>
              <Row>
                <MailIcon />
                <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>お問い合わせ</Typography>
              </Row>
            </Button>
          </Link>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>からお申し込み</Typography>
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
