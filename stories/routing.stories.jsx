import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-12'
import RouterPage from '../pages/router'
import UseRouterPage from '../pages/useRouter'

export default {
  title: 'Pages',
  component: UseRouterPage,
}

export const UseRouter = () => (
  <MemoryRouterProvider
    url="/useRouter"
    async
  >
    <UseRouterPage />
  </MemoryRouterProvider>
)

export const Router = () => (
  <MemoryRouterProvider
    url="/router"
    async
  >
    <RouterPage />
  </MemoryRouterProvider>
)
