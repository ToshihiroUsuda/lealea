import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

import { Column, Row } from '../../components/common/styledComponents'

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
        <Image
          src={imageUrl}
          alt={`${name}さん`}
          width={180}
          height={120}
          style={{ objectFit: 'cover' }}
        />
        <Typography
          sx={{ fontSize: { xs: 16, sm: 24 } }}
        >{`${name}さん(${ageString}代女性)`}</Typography>
      </Column>
      <Row
        sx={{
          bgcolor: bgcolor + '.light',
          borderRadius: 20,
          width: 240,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: 16, sm: 24 } }}>{voice}</Typography>
      </Row>
    </Row>
  )
}

export default CustomerVoice
