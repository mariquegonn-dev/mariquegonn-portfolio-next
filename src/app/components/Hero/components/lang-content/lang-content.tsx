import { GetDateExperience } from '../utils/date'
import { MainLangs } from '@/types/lang-type'
import Image from 'next/image'

type LangContentProps = {
  items: MainLangs
}

export const LangContent = ({ items }: LangContentProps) => {
  const yearNow = GetDateExperience()
  return (
    <section className="bg-gray-button">
      <div
        className="flex flex-wrap 
      justify-center lg:justify-between items-center mt-10 max-w-7xl mx-auto p-10 gap-10"
      >
        <ul className="flex gap-10 flex-wrap">
          <li className="flex gap-3 items-center">
            <span className="text-6xl font-bold">{yearNow}</span>
            <span className="text-base sm:text-2xl max-w-[10ch] uppercase">
              anos de experiência
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <span className="text-6xl font-bold">12</span>
            <span className="text-base sm:text-2xl max-w-[10ch] uppercase">
              projetos concluídos
            </span>
          </li>
        </ul>
        <ul className="flex gap-3 items-center flex-wrap">
          <li className="sm:max-w-[20ch] max-w-[10ch]">
            <span className="text-base sm:text-2xl uppercase">
              principais tecnologias
            </span>
          </li>
          <li>
            <ul className="flex gap-3">
              {items.items
                .filter((lang) =>
                  ['javascript', 'typescript', 'react.js', 'next.js'].includes(
                    lang.alt.toLowerCase()
                  )
                )
                .map((i) => (
                  <li key={i.alt}>
                    <Image
                      width={i.alt === 'Figma' ? 32 : 48}
                      height={48}
                      alt={i.alt}
                      src={i.src}
                    />
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
