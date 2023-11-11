import { ArrowDownwardTwoTone } from '@mui/icons-material'
import { Box, Paper } from '@mui/material'
import Image from 'next/image'
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

// const Flow: React.FC = () => {
//   return (
//     <Row py={2} justifyContent={'center'}>
//       <Column minWidth={320} sx={{ width: '70%', alignItems: 'center' }}>
//         <FlowBlock needArrow>
//           <Link href='https://lin.ee/5ngDh7K'>
//             <Button variant='text' color='success'>
//               <Description pl={1} fontWeight='bold'>
//                 Lea Lea 公式Line
//               </Description>
//             </Button>
//           </Link>
//           <Description>をお友達追加</Description>
//         </FlowBlock>

//         <FlowBlock needArrow>
//           <Description>運営から届くアンケートに回答</Description>
//         </FlowBlock>
//         <FlowBlock needArrow>
//           <Description>スタッフと日時・作業内容を調整</Description>
//         </FlowBlock>
//         <FlowBlock>
//           <Description>家事代行当日！</Description>
//         </FlowBlock>
//       </Column>
//     </Row>
//   )
// }
const imageSize = { xs: 280, sm: 320 }
const Flow: React.FC = () => {
  return (
    <Column py={4} alignItems={'center'}>
      <Row flexWrap='wrap' justifyContent={'center'} alignItems={'center'} maxWidth={700}>
        <Box position='relative' width={imageSize} height={imageSize}>
          <Link href='https://lin.ee/5ngDh7K'>
            <Image src='/assets/flow/step1.png' fill alt='ステップ1 公式line登録' />
            <Box
              position={'absolute'}
              width={imageSize}
              height={imageSize}
              sx={{ '&:hover': { backgroundColor: 'rgba(178, 146, 146, 0.3)' } }}
            ></Box>
          </Link>
        </Box>
        <Box position='relative' width={imageSize} height={imageSize}>
          <Image src='/assets/flow/step2.png' fill alt='ステップ2 アンケート回答' />
        </Box>
        <Box position='relative' width={imageSize} height={imageSize}>
          <Image src='/assets/flow/step3.png' fill alt='ステップ3 事前挨拶' />
        </Box>
        <Box position='relative' width={imageSize} height={imageSize}>
          <Image src='/assets/flow/step4.png' fill alt='ステップ4 訪問日当日' />
        </Box>
      </Row>
    </Column>
  )
}

export default Flow
