'use client'

import cn from '@/app/functions/class-name'
import { HeaderType } from '@/types/header'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const MainNavLink = ({ title, href }: HeaderType) => {
  const pathname = usePathname()
  const isActive =
    pathname === href && 'border-purple-primary hover:text-white-primary'

  return (
    <Link className="text-lg p-3 inline-block text-white-primary" href={href}>
      <span
        className={cn(
          'border-b-2 py-1 border-transparent transition-colors hover:text-purple-primary',
          isActive
        )}
      >
        {title}
      </span>
    </Link>
  )
}
