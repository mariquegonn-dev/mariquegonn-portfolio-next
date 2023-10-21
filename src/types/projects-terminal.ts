export type projectsTerminalType = {
  desc: string
}

export type projectsTerminalSecondaryType = {
  title: string
  response?: string[]
}

export type MainProjectsTerminal = {
  items: projectsTerminalType[]
  secondaryItems: projectsTerminalSecondaryType[]
}
