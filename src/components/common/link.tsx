import MuiLink from '@mui/material/Link'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

type LinkProps = {
  href: NextLinkProps['href']
  target?: string
  children?: React.ReactNode
}
const MyLink: React.FC<LinkProps> = (props) => (
  <NextLink href={props.href} passHref>
    <MuiLink
      target={props.target || '_self'}
      rel='noopener noreferrer'
      sx={{ textDecoration: 'none' }}
      underline='none'
    >
      {props.children}
    </MuiLink>
  </NextLink>
)

export default MyLink
