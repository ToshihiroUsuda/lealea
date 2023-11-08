import { Box, Paper } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import { Column, Description, Row } from '../../components/common/styledComponents'

type Props = {
  name: string
  age: number
  imageUrl: string
  voice: string
  bgcolor: 'secondary' | 'primary'
}

const CustomerVoice: React.FC<Props> = ({ name, age, imageUrl, voice, bgcolor }) => {
  const ageString = age ? age.toString() : '??'
  return (
    <Row sx={{ py: 4, justifyContent: 'center' }}>
      <Column sx={{ pt: 2, alignItems: 'center' }}>
        <Box position='relative' sx={{ width: { xs: 120, sm: 180 }, height: { xs: 120, sm: 180 } }}>
          <Image src={imageUrl} alt={`${name}さん`} fill style={{ objectFit: 'cover' }} />
        </Box>

        <Description>{`${name}さん(${ageString}代女性)`}</Description>
      </Column>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'row',
          bgcolor: bgcolor + '.main',
          borderRadius: 20,
          width: { xs: 180, sm: 320 },
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Description>{voice}</Description>
      </Paper>
    </Row>
  )
}

export default CustomerVoice
