import Link from 'next/link'

export const ContentView = () => {
  return (
    <div className="grid gap-6 justify-items-start">
      <h1 className="text-3xl font-bold">
        Olá! Me chamo <span className="text-blue-primary">Henrique</span>,
        prazer, e sou desenvolvedor Frontend.
      </h1>
      <h2 className="text-xl font-bold">
        versado em <span className="text-blue-primary ">React</span> e{' '}
        <span className="text-blue-primary ">Typescript</span>.
      </h2>

      <Link
        href="#projetos"
        className="bg-blue-primary hover:bg-blue-secundary hover:text-white-primary transition-colors duration-300 tracking-wide text-black-primary font-bold p-4 text-sm rounded-md"
      >
        veja meus projetos
      </Link>
    </div>
  )
}
