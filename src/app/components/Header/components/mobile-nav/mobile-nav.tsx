'use client'

import cn from '@/app/functions/class-name'
import { useState } from 'react'
import { MainNavProps } from '../main-nav/types/main-nav'
import { MobileNavLink } from '../main-nav/mobile-nav/mobile-nav'

export const MobileNav = ({ items }: MainNavProps) => {
  const { mainNav } = items
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="relative lg:hidden block">
        <div
          onClick={() => setOpen(!open)}
          className={cn(
            'cursor-pointer w-10 h-10 flex items-center after:content-[""] after:w-7 after:h-1 after:bg-white-primary after:top-5 after:absolute before:content-[""] before:w-5 before:h-1 before:bg-white-primary before:absolute before:transition-all before:duration-300 after:transition-all after:duration-300 before:top-3',
            open && 'after:rotate-45 before:-rotate-45 before:w-7 before:top-5'
          )}
        ></div>
      </div>

      {open && (
        <ul className="w-[100%] lg:hidden flex flex-col absolute bg-black-bg right-0 top-[120px] shadow-md">
          {mainNav.map((item) => (
            <li
              key={item.title}
              className="border-b-[1px] border-l-[1px] border-gray-button"
            >
              <MobileNavLink
                title={item.title}
                href={item.href}
                icon={item.icon}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
