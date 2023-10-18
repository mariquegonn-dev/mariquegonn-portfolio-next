import { MouseEventHandler } from 'react'

export type HeaderType = {
  title: string
  href: string
  icon?: React.ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export type HeaderNav = {
  mainNav: HeaderType[]
}
