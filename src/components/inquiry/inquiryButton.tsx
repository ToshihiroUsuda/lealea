import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const InquiryButton = () => {
  return (
    <div className='flex pb-4'>
      <Link href='/contact'>
        <Button className='mx-auto w-96 rounded-full bg-gray-300 py-1 text-center text-gray-800 shadow-lg hover:bg-teal-500 hover:text-white'>
          <Typography className='my-2' variant='h5' component='p'>
            お問い合せ
          </Typography>
        </Button>
      </Link>
    </div>
  )
}

export default InquiryButton