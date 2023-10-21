export type projectsViewType = {
  src: string
  title: string
  accordion: {
    title: string
    desc: string[]
  }[]
  links: {
    href: string
    icon: React.ReactNode
  }[]
  langs: {
    alt: string
    src: string
  }[]
}

export type MainProjectsView = {
  items: projectsViewType[]
}
