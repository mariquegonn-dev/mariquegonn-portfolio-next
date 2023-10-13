import { FileIcon, HouseIcon, MailIcon } from '@/app/utils/icons'
import { HeaderNav } from '@/types/header'

export const headerConfig: HeaderNav = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
      icon: <HouseIcon />,
    },
    {
      title: 'Projetos',
      href: '/projetos',
      icon: <FileIcon />,
    },
    {
      title: 'Contato',
      href: '/contato',
      icon: <MailIcon />,
    },
  ],
}
