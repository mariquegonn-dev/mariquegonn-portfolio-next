import { MainMiddleSection } from '@/types/middle-section'
import Image from 'next/image'
import Link from 'next/link'

type MiddleSectionProps = {
  items: MainMiddleSection
}

export const MiddleSection = ({ items }: MiddleSectionProps) => {
  return (
    <section className="max-w-7xl mx-auto p-10 mt-10">
      <div className="bg-black-primary px-4 py-10 rounded-md grid justify-items-center gap-20">
        <div className="grid justify-items-center gap-6">
          <h1 className="text-4xl font-bold text-white-primary">
            Tecnologias e Conhecimentos.
          </h1>
          <ul className="flex gap-6">
            {items.items.map((item) => (
              <li key={item.alt}>
                <Image
                  className="hover:scale-110 transition-all duration-300"
                  src={item.src}
                  width={item.alt === 'Figma' ? 32 : 48}
                  height={48}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="grid justify-items-center gap-6">
          <ul className="flex gap-3">
            <li>
              <div className="p-1 rounded-md border-2 border-gray-primary hover:border-purple-primary transition-colors duration-300">
                <Image
                  className="h-[300px] w-[400px] object-cover rounded-md"
                  src="/assets/images/mr8.webp"
                  width={1919}
                  height={500}
                  alt="mr8"
                />
              </div>
              <ul className="flex gap-3 justify-center mt-3">
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Javascript
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  TypeScript
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Next.js
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Next.js
                </li>
              </ul>
            </li>
            <li>
              <div className="p-1 rounded-md border-2 hover:border-purple-primary transition-colors duration-300">
                <Image
                  className="h-[300px] w-[400px] object-cover rounded-md"
                  src="/assets/images/lotus.webp"
                  width={1919}
                  height={500}
                  alt="mr8"
                />
              </div>
              <ul className="flex gap-3 justify-center mt-3">
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Javascript
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  TypeScript
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Next.js
                </li>
                <li className="px-3 py-1 rounded-md bg-white-primary font-medium">
                  Next.js
                </li>
              </ul>
            </li>
          </ul>

          <p className="text-white-primary text-lg">
            Se desejar visualizar os projetos com mais detalhes, visite{' '}
            <Link className="text-purple-primary underline" href="/projetos">
              este link.
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
