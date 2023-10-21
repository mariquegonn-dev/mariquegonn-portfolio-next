import { GithubIcon, LinkIcon } from '@/app/utils/icons'
import { MainProjectsView } from '@/types/projects-view'

export const projectsViewConfig: MainProjectsView = {
  items: [
    {
      src: '/assets/images/mr8.webp',
      title: 'Mr8 Cursos',
      accordion: [
        {
          title: 'Overview do Projeto',
          desc: [
            'Aplicação web destinada a um curso preparatório para vestibular.',
            'Neste projeto utilizei o framework Next.js, junto a biblioteca Tailwindcss para estilização, Zustand para gerenciamento de estado, React Hook Form para formulários e o próprio Next.js para a construção do backend.',
          ],
        },
        {
          title: 'Desafios',
          desc: [
            'Foi um projeto muito complexo, pois há muita informação para se passar, e o grande desafio foi fazer isso de forma objetiva e pouco poluída. Para isso utilizei conceitos de design sprint na criação do UX, e SOLID no código.',
            'Além disso, o foco principal do site é converter em matrículas, e para isso criei um formulário atrativo, porém, objetivo. Sempre que possível fiz um call to action destinado a matrícula.',
            'Por fim, minha prioridade foi a perfomance e a responsividade, pois boa parte dos consumidores acessam via mobile e com internet limitada, para isso fiz um tratamento de imagens e otimização de código, para que cada coisa só seja renderizada quando for preciso, e o que for renderizado consuma pouco espaço de memória.',
            'Ao final foi muito gratificante ver o resultado. Bonito, rápido, funcional e responsivo.',
          ],
        },
      ],
      links: [
        {
          href: 'https://mr8-next.vercel.app/',
          icon: <LinkIcon size={24} />,
        },
        {
          href: 'https://github.com/mariquegonn-dev/mr8-next',
          icon: <GithubIcon size={24} />,
        },
      ],
      langs: [
        {
          alt: 'React.js',
          src: '/assets/svg/black/react.svg',
        },
        {
          alt: 'Next.js',
          src: '/assets/svg/black/next.svg',
        },
        {
          alt: 'Tailwindcss',
          src: '/assets/svg/black/tailwind.svg',
        },
        {
          alt: 'Zustand',
          src: '/assets/svg/zustand2.svg',
        },
        {
          alt: 'React Hook Form',
          src: '/assets/svg/black/react-hook-form.svg',
        },
        {
          alt: 'Api Next.js',
          src: '/assets/svg/black/api.svg',
        },
      ],
    },
    {
      src: '/assets/images/lotus.webp',
      title: 'Lotus Fit - Javascript',
      accordion: [
        {
          title: 'Overview do Projeto',
          desc: [
            'Calculadora de Calorias interativa.',
            'Neste projeto utilizei React.js no vite e Context API para gerenciamento de estado.',
          ],
        },
        {
          title: 'Desafios',
          desc: [
            'Esse foi o meu primeiro projeto feito exclusivamente por mim com React. Eu queria fazer algo que fosse útil para mim, e que eu pudesse usar no dia a dia.',
            'O grande desafio foi fazer o compartilhamento de dados, pois eu decidi fazer o cálculo por etapas, colhendo informação do usuário vez por vez. Para isso utilizei Context API do React.',
            'Além disso, eu queria que o usuário pudesse salvar os dados, para caso ele queira saber o resultado, mas não precisar refazer todas etapas da calculadora. Para salvar os dados utilizei o localStorage.',
          ],
        },
      ],
      links: [
        {
          href: 'https://lotusfit.netlify.app/caloriasDiarias',
          icon: <LinkIcon size={24} />,
        },
        {
          href: 'https://github.com/mariquegonn-dev/lotus',
          icon: <GithubIcon size={24} />,
        },
      ],
      langs: [
        {
          alt: 'React.js',
          src: '/assets/svg/black/react.svg',
        },
        {
          alt: 'Javascript',
          src: '/assets/svg/black/javascript.svg',
        },
        {
          alt: 'Figma',
          src: '/assets/svg/black/figma.svg',
        },
      ],
    },
    {
      src: '/assets/images/lotus-ts.webp',
      title: 'Lotus Fit - Typescript',
      accordion: [
        {
          title: 'Overview do Projeto',
          desc: [
            'Calculadora de Calorias interativa.',
            'Esse é o mesmo projeto que o anterior, porém, feito com Typescript e Redux.',
          ],
        },
        {
          title: 'Desafios',
          desc: [
            'Para me aperfeiçoar, decidi refazer o projeto anterior, porém, com Typescript e Redux. Foi desafiador, pois eu não tinha experiência com essas tecnologias, e tive que aprender na prática.',
            'Foi incrível refatorar o código e ver os pontos positivos de utilizar tecnologias tão poderosas.',
            'O trabalho que eu tive para lidar com o gerenciamento de estados com Context API foi muito menor com Redux, e o código ficou muito mais limpo e legível.',
            'Ao mesmo tempo, o Typescript me ajudou muito a evitar erros e a ter uma visão mais ampla do projeto.',
          ],
        },
      ],
      links: [
        {
          href: 'https://lotusfit.netlify.app/caloriasDiarias',
          icon: <LinkIcon size={24} />,
        },
        {
          href: 'https://github.com/mariquegonn-dev/lotus-ts',
          icon: <GithubIcon size={24} />,
        },
      ],
      langs: [
        {
          alt: 'React.js',
          src: '/assets/svg/black/react.svg',
        },
        {
          alt: 'Typescript',
          src: '/assets/svg/black/typescript.svg',
        },
        {
          alt: 'Redux',
          src: '/assets/svg/black/redux.svg',
        },
        {
          alt: 'Figma',
          src: '/assets/svg/black/figma.svg',
        },
      ],
    },
  ],
}
