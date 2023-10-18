import {
  GroupIcon,
  BroomIcon,
  ChatsIcon,
  ProactiveIcon,
  PencilIcon,
  HandsIcon,
  BugIcon,
  CodeIcon,
} from '@/app/utils/icons'
import { MainReasons } from '@/types/reasons'

export const reasonsConfig: MainReasons = {
  items: [
    {
      title: 'Por que você deveria me escolher para o seu próximo projeto?',
      desc: 'Sou um apaixonado desenvolvedor frontend com uma sólida base em tecnologias como o React.js, Typescript e Next.js.',
      list: [
        'Boa comunicação',
        'Arquitetura Limpa',
        'Criativo',
        'Trabalho em equipe',
        'Proativo',
        'Vontade de aprender',
        'Foco em resultados',
        'Clean Code',
      ],
      listIcons: [
        <ChatsIcon size={32} key="ChatsIcon" />,
        <CodeIcon size={32} key="CodeIcon " />,
        <BroomIcon size={32} key="BroomIcon" />,
        <GroupIcon size={32} key="GroupIcon" />,
        <ProactiveIcon size={32} key="ProactiveIcon" />,
        <PencilIcon size={32} key="PencilIcon" />,
        <HandsIcon size={32} key="HandsIcon" />,
        <BugIcon size={32} key="BugIcon" />,
      ],
    },
  ],
}
