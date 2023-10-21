'use client'

import { MainProjectsView } from '@/types/projects-view'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion } from './accordion'
import { useStepStore } from '@/store/projects-store'
import cn from '@/app/functions/class-name'
import { projectsViewConfig } from '@/config/projects-view'

type ConsoleViewProps = {
  items: MainProjectsView
}

export const ConsoleView = ({ items }: ConsoleViewProps) => {
  const { step, addStep } = useStepStore()

  return (
    <ul className="w-full p-4 bg-white  rounded-br-md lg:rounded-bl-none rounded-bl-md">
      {items.items
        .filter((filter, index) => index === step)
        .map((item) => (
          <li
            key={item.title}
            className="grid justify-items-center items-start  text-black-primary gap-6 animate-slide-down"
          >
            <div className="max-w-[350px] ">
              <Image
                className="rounded-md shadow-md border border-gray-300"
                src={item.src}
                width={1902}
                height={923}
                alt={item.title}
                priority
              />
            </div>
            <div className="flex gap-3 text-white-primary">
              <button
                disabled={step === 0 && true}
                className={cn(
                  'p-2 rounded-md bg-[#111]',
                  step === 0 && 'opacity-50 cursor-not-allowed'
                )}
                onClick={() => {
                  if (step !== 0) {
                    addStep(step - 1)
                  }
                }}
              >
                prev
              </button>
              <button
                disabled={step === projectsViewConfig.items.length - 1 && true}
                className={cn(
                  'p-2 rounded-md bg-[#111]',
                  step === projectsViewConfig.items.length - 1 &&
                    'opacity-50 cursor-not-allowed'
                )}
                onClick={() => {
                  if (step < projectsViewConfig.items.length - 1)
                    addStep(step + 1)
                }}
              >
                next
              </button>
            </div>
            <div className="grid gap-2">
              <div className="relative">
                <h2 className="font-bold text-2xl">{item.title}</h2>
                <span className="w-20 h-1 bg-blue-secundary block bottom-0"></span>
              </div>
              <Accordion accordion={item.accordion} />
            </div>
            <div className="justify-self-stretch flex flex-wrap gap-10 justify-between">
              <div className="flex gap-2 flex-wrap">
                {item.langs.map((lang) => (
                  <Image
                    className="hover:-translate-y-2 transition-all duration-300"
                    key={lang.alt}
                    width={lang.alt === 'Figma' ? 24 : 32}
                    height={32}
                    alt={lang.alt}
                    src={lang.src}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    aria-label={link.href}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
    </ul>
  )
}
