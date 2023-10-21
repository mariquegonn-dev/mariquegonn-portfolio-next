'use client'

import cn from '@/app/functions/class-name'
import { CaretIcon } from '@/app/utils/icons'

import { useState } from 'react'

type AccordionType = {
  accordion: {
    title: string
    desc: string[]
  }[]
}

export const Accordion = ({ accordion }: AccordionType) => {
  const [resposta, setResposta] = useState(0)

  function toggleResposta(index: number) {
    if (resposta === index) {
      setResposta(-1)
    } else {
      setResposta(index)
    }
  }

  return (
    <dl className="grid gap-5">
      {accordion.map((item, index) => (
        <div key={index}>
          <dt
            className="flex cursor-pointer items-center justify-between rounded-[8px_8px_0px_0px] bg-[#1F1F24] text-white p-4 font-semibold shadow-md"
            onClick={() => toggleResposta(index)}
          >
            <p>{item.title}</p>
            <CaretIcon
              className={` transition-all duration-200 ${
                index === resposta ? 'rotate-0' : '-rotate-45'
              }`}
              size={24}
              color="#fff"
            />
          </dt>
          <dd
            className={cn(
              'overflow-hidden bg-[#222433] text-white transition-all duration-500',
              resposta === index ? 'max-h-[1000px] md:max-h-[400px]' : 'max-h-0'
            )}
          >
            {item.desc.map((desc, descIndex) => (
              <p className="px-4 py-2" key={descIndex}>
                {desc}
              </p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}
