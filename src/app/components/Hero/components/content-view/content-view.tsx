import Link from 'next/link'

export const ContentView = () => {
  return (
    <div className="grid gap-6 justify-items-start">
      <h1 className="text-3xl font-bold">
        <p>
          Olá! Me chamo <span className="text-purple-primary">Henrique</span>,
          prazer,
        </p>
        <p className="mt-3"> e sou desenvolvedor Frontend.</p>
      </h1>
      <h2 className="text-xl font-light">
        versado em <span className="text-purple-primary">React</span> e{' '}
        <span className="text-purple-primary">Typescript</span>.
      </h2>

      <Link
        href="#projetos"
        className="bg-purple-primary hover:bg-[#C280FF] hover:text-black-primary transition-colors duration-300 tracking-wide text-white-primary p-4 text-sm rounded-md"
      >
        veja meus projetos
      </Link>
    </div>
  )
}
