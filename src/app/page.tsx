import { reasonsConfig } from '@/config/reasons'
import { Hero } from './components/Hero'
import { Reasons } from './components/Reasons'
import { ContentView } from './components/Reasons/content-view'
import { LangContent } from './components/Hero/components/lang-content/lang-content'
import { LangConfig } from '@/config/lang-config'

export default function Home() {
  return (
    <main className="pt-32 h-[2000px]">
      <Hero>
        <LangContent items={LangConfig} />
      </Hero>
      {/* <Reasons>
        <ContentView items={reasonsConfig} />
      </Reasons> */}
    </main>
  )
}
