import { Box, Button } from '@mui/material'
import Image from 'next/image'

import Link from '../common/link'
import { Description } from '../common/styledComponents'

type LinkButtonProps = {
  linkUrl: string
  imageUrl: string
  buttonColor: 'primary' | 'secondary'
  buttonText: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  linkUrl,
  imageUrl,
  buttonColor,
  buttonText,
}) => {
  return (
    <Box p={1}>
      <Link href={linkUrl}>
        <Button
          variant='contained'
          color={buttonColor}
          sx={{
            pb: 2,
            px: 2,
            color: 'black',
            borderRadius: 10,
            height: { xs: 200, sm: 280 },
            width: { xs: 160, sm: 240 },
            flexDirection: 'column',
            justifyContent: 'end',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: { xs: 120, sm: 200 },
              height: { xs: 120, sm: 200 },
              top: '10%',
              borderRadius: '50%',
              bgcolor: 'white',
              position: 'absolute',
            }}
          >
            <Image src={imageUrl} alt='' fill style={{ objectFit: 'cover' }} />
          </Box>
          <Description>{buttonText}</Description>
        </Button>
      </Link>
    </Box>
  )
}
