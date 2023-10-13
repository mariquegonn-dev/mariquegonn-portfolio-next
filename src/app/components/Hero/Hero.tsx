'use client'

import Image from 'next/image'
import { CodeView } from './components/code-view/code-view'
import { ContentView } from './components/content-view/content-view'
import { TsxIcon } from '@/app/utils/icons'
import { useState } from 'react'
import cn from '@/app/functions/class-name'

export const Hero = () => {
  const [openCode, setOpenCode] = useState('browser')

  return (
    <section className="max-w-7xl mx-auto p-10 mt-10 jetbrains">
      <div className="grid lg:grid-cols-[1fr_0.8fr] items-center grid-cols-1 gap-10">
        <div>
          <div className="flex gap-[0.5px] mb-6 relative">
            <div
              onClick={() => {
                if (openCode === 'browser') {
                  setOpenCode('code')
                }
              }}
              className={cn(
                'before:content-[""] before:before-hero before:w-[24px] before:h-[24px] before:absolute before:-top-7 before:animate-bounce before:left-11',
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

        <div className="w-60 lg:w-80 justify-self-center lg:justify-self-end relative shadow-inner shadow-black-primary rounded-full before:absolute after:absolute before:content-[''] after:content-[''] before:before-hero-react after:after-hero-typescript before:w-[48px] before:h-[48px] after:w-[48px] after:h-[48px] before:animate-slow-animate after:animate-slow-animate after:right-0 after:bottom-10 before:top-10">
          <Image
            className="rounded-full object-cover"
            width={600}
            height={600}
            alt="imagem de perfil"
            src="/assets/images/cat.png"
          />
        </div>
      </div>
    </section>
  )
}
