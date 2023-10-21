import { MainProjectsTerminal } from '@/types/projects-terminal'

export const projectsTerminalConfig: MainProjectsTerminal = {
  items: [
    {
      desc: 'should create a new project (10ms)',
    },
    {
      desc: 'should return a project sucessfull (7ms)',
    },
    {
      desc: 'should satisfied customer (1ms)',
    },
  ],
  secondaryItems: [
    {
      title: 'Test Suites: ',
      response: ['1 passed', '1 total'],
    },
    {
      title: 'Tests: ',
      response: ['3 passed', '3 total'],
    },
    {
      title: 'Snapshots: ',
      response: ['0 total'],
    },
    {
      title: 'Time: ',
      response: ['2.079 s'],
    },
    {
      title: 'Ran all test suites. ',
    },
  ],
}
