import { CheckIcon } from '@/app/utils/icons'
import { MainReasons } from '@/types/reasons'

export type ContentViewProps = {
  items: MainReasons
}

export const ContentView = ({ items }: ContentViewProps) => {
  return (
    <>
      {items.items.map((item, index) => {
        return (
          <div key={index} className="grid gap-10 justify-items-center">
            <div className="grid gap-3">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="text-gray-vscode">{item.desc}</p>
            </div>
            <ul className="grid grid-cols-4 gap-3 max-w-4xl">
              {item.list.map((list, index) => (
                <li
                  key={list}
                  className="cursor-cell p-2  flex items-center justify-center border-[1px] border-gray-500 rounded-md shadow-sm shadow-blue-400 hover:scale-105 transition-all duration-300 hover:border-blue-primary svg-hover-none hover:shadow-none"
                >
                  <div className="flex gap-3 items-center flex-col">
                    {item.listIcons
                      .filter((z, i) => i === index)
                      .map((icon, iconIndex) => (
                        <div key={iconIndex}>{icon}</div>
                      ))}
                    <div className="flex gap-1 items-center">
                      <CheckIcon size={18} />
                      <span>{list}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </>
  )
}
