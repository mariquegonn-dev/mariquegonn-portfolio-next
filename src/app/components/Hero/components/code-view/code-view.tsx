export const CodeView = () => {
  return (
    <div>
      <div>
        <p>app/components/Hero/Hero.tsx</p>
        <br></br>
        <div>
          <span className="text-pink-vscode">type</span>{' '}
          <span className="text-blue-vscode font-medium italic">HeroProps</span>{' '}
          <span className="text-pink-vscode">=</span>{' '}
          <span className="text-inherit">{`{`}</span>
          <p>
            title<span className="text-pink-vscode">:</span>{' '}
            <span className="italic text-blue-vscode">string</span>
          </p>
          <p>
            subtitle<span className="text-pink-vscode">:</span>{' '}
            <span className="italic text-blue-vscode">string</span>
          </p>
          <p className="text-inherit">{`}`}</p>
        </div>
        <br></br>
        <div>
          <span className="text-pink-vscode">export const</span>{' '}
          <span className="text-green-vscode">Hero</span>{' '}
          <span className="text-pink-vscode">=</span>{' '}
          <span>
            (<span className="text-pink-vscode">{`{`}</span>
            <span className="text-orange-vscode">title, subtitle</span>
            <span className="text-pink-vscode">{`}:`}</span>{' '}
            <span className="text-blue-vscode italic">HeroProps</span>){' '}
            <span className="text-pink-vscode">{`=>`}</span> <span>{`{`}</span>
          </span>
          <p className="ml-4">
            <span className="text-pink-vscode">return</span>{' '}
            <span className="text-inherit">
              {`<`}
              <span className="text-pink-vscode">section</span>
              <span>{`>`}</span>
            </span>
          </p>
          <p className="ml-8">
            <span className="text-inherit">
              {`<`}
              <span className="text-pink-vscode">h1</span>{' '}
              <span className="text-green-vscode italic">className</span>{' '}
              <span className="text-pink-vscode">=</span>
              <span className="text-yellow-vscode">{`"text-3xl font-bold"`}</span>
              <span>{`>`}</span>
            </span>
            <span>
              <span className="text-blue-vscode">{`{`}</span>
              <span className="text-orange-vscode">title</span>
              <span className="text-blue-vscode">{`}`}</span>
            </span>
            <span>
              <span className="text-white-primary">{`</`}</span>
              <span className="text-pink-vscode">h1</span>

              <span>{`>`}</span>
            </span>
          </p>
          <p className="ml-8">
            <span className="text-inherit">
              {`<`}
              <span className="text-pink-vscode">h2</span>{' '}
              <span className="text-green-vscode italic">className</span>{' '}
              <span className="text-pink-vscode">=</span>
              <span className="text-yellow-vscode">{`"text-xl font-light"`}</span>
              <span>{`>`}</span>
            </span>
            <span>
              <span className="text-blue-vscode">{`{`}</span>
              <span className="text-orange-vscode">subtitle</span>
              <span className="text-blue-vscode">{`}`}</span>
            </span>
            <span>
              <span className="text-white-primary">{`</`}</span>
              <span className="text-pink-vscode">h2</span>

              <span>{`>`}</span>
            </span>
          </p>
          <p className="ml-4">
            <span className="text-inherit">
              {`</`}
              <span className="text-pink-vscode">section</span>
              <span>{`>`}</span>
            </span>
          </p>
          <p className="text-inherit">{`}`}</p>
        </div>
      </div>
      <br></br>
      <div>
        <p>app/page.tsx</p>
        <br></br>
        <div>
          <span className="text-pink-vscode">export default</span>{' '}
          <span className="text-green-vscode">Hero</span>
          <span>()</span> <span>{`{`}</span>
          <p className="ml-4">
            <span className="text-pink-vscode">return</span>{' '}
            <span className="text-inherit">
              {`<`}
              <span className="text-pink-vscode">main</span>
              <span>{`>`}</span>
            </span>
          </p>
          <p className="ml-8">
            <span className="text-inherit">
              {`<`}
              <span className="text-blue-vscode italic">Hero</span>{' '}
              <span className="text-green-vscode">title</span>
              <span className="text-pink-vscode">=</span>
              <span className="text-yellow-vscode">
                {`"Olá! Me chamo Henrique, prazer, e sou desenvolvedor
            Frontend."`}
              </span>{' '}
              <span className="text-green-vscode">subtitle</span>
              <span className="text-pink-vscode">=</span>
              <span className="text-yellow-vscode">
                {`"versado em React e Typescript."`}
              </span>{' '}
              <span>{`/>`}</span>
            </span>
          </p>
          <p className="ml-8 text-gray-vscode">{`//E aspirante a UX/UI designer.`}</p>
          <p className="ml-4">
            <span className="text-inherit">
              {`</`}
              <span className="text-pink-vscode">main</span>
              <span>{`>`}</span>
            </span>
          </p>
          <p className="text-inherit">{`}`}</p>
        </div>
      </div>
    </div>
  )
}
