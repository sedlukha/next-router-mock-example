import { useCallback } from 'react'
import { useRouter } from 'next/router'

const UseRouterPage = () => {
  const router = useRouter()

  const handleClick = useCallback(() => router.push({
      pathname: router?.pathname,
      query: {
        ...router?.query,
        test: '1'
      },
    }, undefined,
    {
      scroll: false,
      shallow: true
    }), [])

  return (
    <main>
      <button onClick={handleClick}>button</button>
    </main>
  )
}

export default UseRouterPage
