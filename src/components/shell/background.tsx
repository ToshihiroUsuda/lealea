import { Box } from '@mui/material'

const Background: React.FC<React.PropsWithChildren> = (props: React.PropsWithChildren) => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),linear-gradient(-30deg, rgba(253, 146, 146, 1), rgba(209, 254, 212, 1))',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          border: 2,
          borderTop: 'none',
          borderBottom: 'none',

          borderImage:
            'linear-gradient(-30deg, rgba(251, 249, 174, 1), rgba(155, 114, 54, 1), rgba(251, 249, 174, 1))',
          borderImageSlice: 1,
          width: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            width: '97%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              padding: { xs: 4, sm: 8 },
              border: 10,
              borderTop: 'none',
              borderBottom: 'none',

              borderImage:
                'linear-gradient(-30deg, rgba(251, 249, 174, 1), rgba(155, 114, 54, 1), rgba(251, 249, 174, 1))',
              borderImageSlice: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {props.children}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Background
