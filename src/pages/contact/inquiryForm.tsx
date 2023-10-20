import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, MenuItem, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import useResponse, { Response } from '../../hooks/useResponse'

const inquiryOptions = ['customer', 'worker'] as const

export type InquiryType = (typeof inquiryOptions)[number]

export const inquiryText: Record<InquiryType, string> = {
  customer: '家事代行を利用したい',
  worker: '家事代行で働きたい',
}

export const isValidInquiry = (value: string): value is InquiryType => {
  return inquiryOptions.some((option) => value == option)
}

export interface IFormValues {
  name: string
  email: string
  inquiry: InquiryType
  detail?: string
}

export const defaultValues: IFormValues = {
  name: '',
  email: '',
  inquiry: 'customer',
  detail: '',
}

const schema: yup.SchemaOf<IFormValues> = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup.string().required('必須項目です').email('有効な形式ではありません'),
  inquiry: yup.mixed().oneOf(['customer', 'worker']),
  detail: yup.string(),
})

const InquiryForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })

  const [response, setSuccess, setError, reset] = useResponse()

  const onSubmit: SubmitHandler<IFormValues> = (data: IFormValues) => {
    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSuccess()
        } else {
          console.log(`Error: Status Code ${res.status}`)
          setError()
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`)
        setError()
      })
  }

  return (
    <>
      <Stack
        component='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        spacing={2}
        sx={{ m: 2 }}
      >
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='text'
              label='お名前(ニックネーム)'
              fullWidth
              required
              error={'name' in errors}
              helperText={errors.name?.message}
              sx={{ bgcolor: 'white', fontSize: { xs: 16, sm: 24 } }}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='email'
              label='メールアドレス'
              fullWidth
              required
              error={'email' in errors}
              helperText={errors.email?.message}
              sx={{ bgcolor: 'white', fontSize: { xs: 16, sm: 24 } }}
            />
          )}
        />

        <Controller
          name='inquiry'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label='お問い合せ内容'
              fullWidth
              required
              error={'inquiry' in errors}
              helperText={errors.inquiry?.message}
              sx={{ bgcolor: 'white', fontSize: { xs: 16, sm: 24 } }}
            >
              {inquiryOptions.map((key: InquiryType, index) => {
                return (
                  <MenuItem key={index} value={key}>
                    {inquiryText[key]}
                  </MenuItem>
                )
              })}
            </TextField>
          )}
        />

        <Controller
          name='detail'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='text'
              label='その他、気になることがございましたらご記載ください'
              multiline
              rows={8}
              fullWidth
              error={'detail' in errors}
              helperText={errors.detail?.message}
              sx={{ bgcolor: 'white', fontSize: { xs: 16, sm: 24 } }}
            />
          )}
        />
        <Button
          variant='contained'
          type='submit'
          size='large'
          sx={{
            color: 'black',
          }}
        >
          送信する
        </Button>
        <Typography sx={{ fontSize: { xs: 12, sm: 16 } }}>
          ※メールが届かない場合は迷惑メールをご確認ください
        </Typography>
      </Stack>
      <Snackbar
        open={response === Response.Success}
        onClose={reset}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity='success' onClose={reset} sx={{ width: '100%' }}>
          送信しました！
        </Alert>
      </Snackbar>
      <Snackbar
        open={response === Response.Error}
        onClose={reset}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity='error' onClose={reset} sx={{ width: '100%' }}>
          エラーが発生しました。
        </Alert>
      </Snackbar>
    </>
  )
}

export default InquiryForm
