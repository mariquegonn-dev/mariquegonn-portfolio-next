import { reasonsConfig } from '@/config/reasons'
import { Hero } from './components/Hero'
import { Reasons } from './components/Reasons'
import { ContentView } from './components/Reasons/content-view'
import { LangContent } from './components/Hero/components/lang-content/lang-content'
import { LangConfig } from '@/config/lang-config'
import { About } from './components/About'
import { AboutConfig } from '@/config/about-config'
import { AboutContent } from './components/About/components/about-content/about-content'
import { Projects } from './components/Projects'
import { projectsTerminalConfig } from '@/config/projects-terminal'
import { Console } from './components/Projects/components/console'

export default function Home() {
  return (
    <main className="pt-32 h-[2000px]">
      <Hero>
        <LangContent items={LangConfig} />
      </Hero>
      {/* <Reasons>
        <ContentView items={reasonsConfig} />
      </Reasons> */}
      <About>
        <AboutContent items={AboutConfig} />
      </About>

      <Projects>
        <Console items={projectsTerminalConfig} />
      </Projects>
    </main>
  )
}
