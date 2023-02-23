import { yupResolver } from '@hookform/resolvers/yup'
import { Alert, Button, Snackbar, Stack, TextField } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import useResponse, { Response } from '../../hooks/useResponse'

export interface IFormValues {
  name: string
  email: string
  inquiry: string
}

export const defaultValues: IFormValues = {
  name: '',
  email: '',
  inquiry: '',
}

const schema: yup.SchemaOf<IFormValues> = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup.string().required('必須項目です').email('有効な形式ではありません'),
  inquiry: yup.string().required('必須項目です'),
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
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='text'
              label='メールアドレス'
              fullWidth
              required
              error={'email' in errors}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name='inquiry'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              type='inquiry'
              label='お問い合せ内容'
              multiline
              rows={8}
              fullWidth
              required
              error={'inquiry' in errors}
              helperText={errors.inquiry?.message}
            />
          )}
        />
        <Button variant='contained' type='submit' size='large'>
          送信する
        </Button>
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
