import { Box } from '@mui/material'

const Background: React.FC<React.PropsWithChildren> = (props: React.PropsWithChildren) => {
  return (
    <Box
      sx={{
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
            width: '97%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              padding: { xs: 4, sm: 8 },
              borderStyle: 'solid',
              borderWidth: { xs: 6, sm: 10 },
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
