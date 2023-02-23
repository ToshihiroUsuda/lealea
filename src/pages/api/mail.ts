import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

import { IFormValues } from '../../components/inquiry/inquiryForm'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const data = JSON.parse(req.body) as IFormValues
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: data.email,
    bcc: process.env.MAIL_USER,
    subject: '[KOA Consulting Farm]お問い合わせありがとうございます！',
    text: `
${data.name} 様

この度はお問い合せいただきありがとうございます！
担当者から折り返しご連絡いたしますので、少々お待ちください。

=== ご入力内容 ===
  ▼お名前(ニックネーム)
      ${data.name}

  ▼メールアドレス
      ${data.email}

  ▼お問い合わせ内容
      ${data.inquiry}


=========================
   KOA Cunsulting Farm
=========================
`,
  })

  res.status(200).json({
    success: true,
  })
}
