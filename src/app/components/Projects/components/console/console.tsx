'use client'

import cn from '@/app/functions/class-name'
import { CheckIcon } from '@/app/utils/icons'
import { MainProjectsTerminal } from '@/types/projects-terminal'

import { ConsoleView } from './components/console-view'
import { projectsViewConfig } from '@/config/projects-view'

import { useStepStore } from '@/store/projects-store'

type ConsoleType = {
  items: MainProjectsTerminal
}

export const Console = ({ items }: ConsoleType) => {
  const { step, addStep } = useStepStore()

  return (
    <div className="bg-[#222433] rounded-md shadow-md ">
      <div className="flex lg:flex-row flex-col gap-3 items-center justify-between px-10 py-4 rounded-t-md bg-[#1F1F24]">
        <div className="flex gap-3">
          <span className="lg:w-4 lg:h-4 w-2 h-2 bg-[#545A67] block rounded-full"></span>
          <span className="lg:w-4 lg:h-4 w-2 h-2 bg-[#545A67] block rounded-full "></span>
        </div>

        <div>
          <p className="lg:block hidden">{`~/mariquegonn/portfolio/projects`}</p>
          <p className="lg:hidden block">{`~/mariquegonn/projects`}</p>
        </div>

        <div className="gap-3 lg:flex hidden">
          <button
            disabled={step === 0 && true}
            className={cn(
              'p-2 rounded-md bg-[#545A67]',
              step === 0 && 'opacity-50 cursor-not-allowed'
            )}
            onClick={() => {
              if (step !== 0) {
                addStep(step - 1)
              }
            }}
          >
            prev
          </button>
          <button
            disabled={step === projectsViewConfig.items.length - 1 && true}
            className={cn(
              'p-2 rounded-md bg-[#545A67]',
              step === projectsViewConfig.items.length - 1 &&
                'opacity-50 cursor-not-allowed'
            )}
            onClick={() => {
              if (step < projectsViewConfig.items.length - 1) addStep(step + 1)
            }}
          >
            next
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 font-jetbrains text-sm">
        <div className="ml-10 py-10 lg:block hidden">
          <div className="flex gap-3">
            <span className="bg-[#08BD7B] px-2 text-[#222433]">PASS</span>
            <p className="text-gray-400">
              {`src/repository/`}
              <span className="text-white-primary">Projects.test.ts</span>
            </p>
          </div>
          <div>
            <ul className="text-gray-400">
              {items.items.map((item) => (
                <li key={item.desc} className="flex gap-1 items-center">
                  <CheckIcon color="#08BD7B" />
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <ul>
              {items.secondaryItems.map((item, index) => (
                <li key={index} className="grid grid-cols-[200px_auto] gap-1">
                  <p>{item.title}</p>
                  <div className="flex gap-2">
                    {item.response?.map((res, indexRes) => (
                      <p
                        key={indexRes}
                        className={cn(indexRes === 0 ? 'text-[#08BD7B]' : '')}
                      >
                        {res}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ConsoleView items={projectsViewConfig} />
      </div>
    </div>
  )
}
