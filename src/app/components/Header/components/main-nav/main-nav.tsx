'use client'

import { MainNavProps } from './types/main-nav'
import { MobileNavLink } from './mobile-nav/mobile-nav'

export const MainNav = ({ items }: MainNavProps) => {
  const { mainNav } = items

  return (
    <nav>
      <ul className="hidden lg:flex gap-3">
        {mainNav.map((item, index) => (
          <li key={item.title}>
            <MobileNavLink title={item.title} href={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
