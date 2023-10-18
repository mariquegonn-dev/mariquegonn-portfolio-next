type ReasonsProps = {
  children: React.ReactNode
}

export const Reasons = ({ children }: ReasonsProps) => {
  return (
    <section className="max-w-7xl mx-auto p-10 mt-10">
      {/* <h1 className="text-3xl font-bold">
          Por que você deveria me escolher para o seu próximo projeto?
        </h1>
        <p className="text-gray-vscode">
          Sou um apaixonado desenvolvedor frontend com uma sólida base em
          tecnologias como o React.js, Typescript e Next.js.
        </p>
       */}

      {children}
    </section>
  )
}
