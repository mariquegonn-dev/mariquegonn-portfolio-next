import { MainAbout } from '@/types/about'

type AboutContentProps = {
  items: MainAbout
}

export const AboutContent = ({ items }: AboutContentProps) => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Sobre mim</h1>
      {items.items.map((item, index) => (
        <p key={index}>{item.desc}</p>
      ))}
    </div>
  )
}
