import RouterPage from '../pages/router'
import LinkPage from '../pages/link'
import UseRouterPage from '../pages/useRouter'
import React, { useEffect } from 'react'
import router from 'next-router-mock'

const SingletonRouterProvider = ({
 children,
 url
}) => {
  useEffect(() => {
    router.setCurrentUrl(url)
  }, [url])

  return <>{children}</>
}

export default {
  title: 'Pages',
  component: UseRouterPage,
}

export const UseRouter = () => (
  <SingletonRouterProvider
    url="/useRouter"
  >
    <UseRouterPage />
  </SingletonRouterProvider>
)

export const Router = () => (
  <SingletonRouterProvider
    url="/router"
  >
    <RouterPage />
  </SingletonRouterProvider>
)

export const Link = () => (
  <SingletonRouterProvider
    url="/link"
  >
    <LinkPage />
  </SingletonRouterProvider>
)
