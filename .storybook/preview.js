import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-12';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => <MemoryRouterProvider><Story/></MemoryRouterProvider>
];

