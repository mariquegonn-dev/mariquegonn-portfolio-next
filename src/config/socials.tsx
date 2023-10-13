import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/app/utils/icons'
import { MainSocial } from '@/types/socials'

const className = 'transition-colors duration-300'

export const socialsConfig: MainSocial = {
  items: [
    {
      icon: <GithubIcon size={24} className={className} />,
      src: 'https://github.com/mariquegonn-dev',
      alt: 'Github https://github.com/mariquegonn-dev',
    },
    {
      icon: <LinkedinIcon size={24} className={className} />,
      src: 'https://www.linkedin.com/in/mariquegonn-dev/',
      alt: 'Linkedin https://www.linkedin.com/in/mariquegonn-dev/',
    },
    {
      icon: <WhatsappIcon size={24} className={className} />,
      src: 'https://wa.me/5571987510739?text=Ol%C3%A1+Henrique%21',
      alt: 'Whastapp 71987510739',
    },
  ],
}
