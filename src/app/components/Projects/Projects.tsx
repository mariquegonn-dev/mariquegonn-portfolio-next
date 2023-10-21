import React from 'react'

type ProjectsType = {
  children: React.ReactNode
}

export const Projects = ({ children }: ProjectsType) => {
  return (
    <section className="bg-[#545A67] ">
      <div className="max-w-7xl mx-auto p-10 mt-10">{children}</div>
    </section>
  )
}
