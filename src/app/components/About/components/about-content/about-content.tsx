import { MainAbout } from '@/types/about'

type AboutContentProps = {
  items: MainAbout
}

export const AboutContent = ({ items }: AboutContentProps) => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Sobre mim</h1>
      {items.items.map((item, index) => (
        <p className="relative" key={index}>
          <span className='before:content-[""] before:w-6 before:h-2 before:bg-blue-primary before:absolute before:-top-4 after:content-[""] after:w-10 after:h-2 after:bg-blue-secundary after:absolute after:-top-2'></span>
          {item.desc}
        </p>
      ))}
    </div>
  )
}
