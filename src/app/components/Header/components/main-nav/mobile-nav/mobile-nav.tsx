'use client'

import cn from '@/app/functions/class-name'
import { HeaderType } from '@/types/header'
import Link from 'next/link'

export const MobileNavLink = ({ title, href, icon, onClick }: HeaderType) => {
  return (
    <Link className="text-lg grid p-6" href={href} onClick={onClick}>
      <span className={cn(icon && 'flex gap-3 items-center')}>
        {icon}
        {title}
      </span>
    </Link>
  )
}
