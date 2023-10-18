'use client'

import { MainNavProps } from './types/main-nav'

import { MainNavLink } from './main-nav-link/main-nav-link'

export const MainNav = ({ items }: MainNavProps) => {
  const { mainNav } = items

  return (
    <nav>
      <ul className="hidden lg:flex gap-3">
        {mainNav.map((item, index) => (
          <li key={item.title}>
            <MainNavLink title={item.title} href={item.href} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
