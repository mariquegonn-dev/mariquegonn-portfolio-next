import Image from 'next/image'

type AboutProps = {
  children: React.ReactNode
}

export const About = ({ children }: AboutProps) => {
  return (
    <section className="max-w-7xl mx-auto p-10 mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      {children}
      <div className="max-w-[400px] grid lg:justify-self-end justify-self-center">
        <Image
          src="/assets/images/about-image.webp"
          width={643}
          height={800}
          priority
          alt="Foto de Marique em um fundo com dunas de areia"
        />
      </div>
    </section>
  )
}
