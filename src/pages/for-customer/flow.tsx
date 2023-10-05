import { ArrowDownwardTwoTone, Mail as MailIcon } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import React from 'react'

import Link from '../../components/common/link'
import { Column, FlexBox, Row } from '../../components/common/styledComponents'

const Flow: React.FC = () => {
  return (
    <Row py={2} justifyContent={'center'}>
      <Column minWidth={320} sx={{ width: '70%', alignItems: 'center' }}>
        <FlexBox
          my={2}
          width='100%'
          height={80}
          bgcolor='secondary.light'
          justifyContent='center'
          alignItems='center'
          borderRadius={10}
        >
          <Link href='/contact'>
            <Button variant='text'>
              <Row>
                <MailIcon />
                <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>お問い合わせ</Typography>
              </Row>
            </Button>
          </Link>
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>からお申し込み</Typography>
        </FlexBox>

        <ArrowDownwardTwoTone fontSize='large' />

        <FlexBox
          my={2}
          width='100%'
          height={80}
          bgcolor='secondary.light'
          justifyContent='center'
          alignItems='center'
          borderRadius={10}
        >
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>あああああああ</Typography>
        </FlexBox>

        <ArrowDownwardTwoTone fontSize='large' />

        <FlexBox
          my={2}
          width='100%'
          height={80}
          bgcolor='secondary.light'
          justifyContent='center'
          alignItems='center'
          borderRadius={10}
        >
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>あああああああ</Typography>
        </FlexBox>

        <ArrowDownwardTwoTone fontSize='large' />

        <FlexBox
          my={2}
          width='100%'
          height={80}
          bgcolor='secondary.light'
          justifyContent='center'
          alignItems='center'
          borderRadius={10}
        >
          <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>あああああああ</Typography>
        </FlexBox>
      </Column>
    </Row>
  )
}

export default Flow
