import { HeaderType } from '@/types/header'
import Link from 'next/link'

export const MainNavLink = ({ title, href }: HeaderType) => {
  return (
    <Link
      className="text-lg p-3 inline-block text-white-primary hover:text-purple-primary"
      href={href}
    >
      {title}
    </Link>
  )
}
