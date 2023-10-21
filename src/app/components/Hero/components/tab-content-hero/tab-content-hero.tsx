'use client'

import cn from '@/app/functions/class-name'
import { TsxIcon } from '@/app/utils/icons'
import { useState } from 'react'
import { CodeView } from '../code-view/code-view'
import { ContentView } from '../content-view/content-view'

export const TabContentHero = () => {
  const [openCode, setOpenCode] = useState('browser')
  return (
    <div>
      <div className="flex gap-[0.5px] mb-6 relative">
        <div
          onClick={() => {
            if (openCode === 'browser') {
              setOpenCode('code')
            }
          }}
          className={cn(
            'before:content-[""] before:before-hero before:w-[24px] before:h-[24px] before:absolute before:-top-7 before:animate-bounce before:left-11 svg-hover-none',
            openCode === 'code'
              ? 'bg-gray-button-sec flex gap-1 items-center border-x-[1px] border-black-primary p-2 border-t-[1px] border-t-pink-vscode cursor-pointer before:hidden'
              : 'bg-gray-button flex gap-1 items-center border-black-primary p-2 cursor-pointer'
          )}
        >
          <TsxIcon size={18} />
          <span>code.tsx</span>
        </div>
        <div
          onClick={() => {
            if (openCode === 'code') {
              setOpenCode('browser')
            }
          }}
          className={cn(
            openCode === 'browser'
              ? 'bg-gray-button-sec flex gap-1 items-center border-x-[1px] border-black-primary p-2 border-t-[1px] border-t-pink-vscode cursor-pointer'
              : 'bg-gray-button flex gap-1 items-center border-black-primary p-2 cursor-pointer'
          )}
        >
          <span>browser</span>
        </div>
      </div>

      {openCode === 'code' ? <CodeView /> : <ContentView />}
    </div>
  )
}
