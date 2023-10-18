import { TabContentHero } from './components/tab-content-hero/tab-content-hero'
import { ImageHero } from './components/image-hero/image-hero'

type HeroProps = {
  children: React.ReactNode
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <>
      <section className="max-w-7xl mx-auto p-10 mt-10 font-jetbrains">
        <div className="grid lg:grid-cols-[1fr_0.8fr] items-center grid-cols-1 gap-10">
          <TabContentHero />

          <ImageHero />
        </div>
      </section>

      {children}
    </>
  )
}
