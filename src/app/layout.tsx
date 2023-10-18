import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono, Ubuntu_Mono } from 'next/font/google'
import { MainNav } from './components/Header/components/main-nav'
import { Header } from './components/Header'
import { headerConfig } from '@/config/header-config'
import { Socials } from './components/Socials'
import { socialsConfig } from '@/config/socials'
import { MobileNav } from './components/Header/components/mobile-nav/mobile-nav'

const ubuntu = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Mariquegonn | Front-end Developer',
  description:
    'Olá! Sou um apaixonado desenvolvedor frontend com uma sólida base em tecnologias como o React.js, Typescript e Next.js. Estou ansioso por uma oportunidade que me permita demonstrar minhas habilidades. Tenho facilidade em aprender e transmitir conhecimento, sou proativo e estou em constante aperfeiçoamento. Posso garantir que entregarei o meu melhor, com muita dedicação e empenho!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`bg-[#28293D] text-white-primary ${ubuntu.className} ${jetbrains.variable}`}
      >
        <Socials items={socialsConfig} />
        <Header>
          <MainNav items={headerConfig} />
          <MobileNav items={headerConfig} />
        </Header>
        {children}
      </body>
    </html>
  )
}
