import Image from 'next/image'

export const ImageHero = () => {
  return (
    <div className="w-60 lg:w-80 justify-self-center lg:justify-self-end relative shadow-inner shadow-black-primary rounded-full before:absolute after:absolute before:content-[''] after:content-[''] before:before-hero-react after:after-hero-typescript before:w-[48px] before:h-[48px] after:w-[48px] after:h-[48px] before:animate-slow-animate after:animate-slow-animate after:right-0 after:bottom-10 before:top-10">
      <Image
        className="rounded-full object-cover"
        width={600}
        height={600}
        alt="imagem de perfil"
        src="/assets/images/cat.png"
        priority={true}
      />
    </div>
  )
}
