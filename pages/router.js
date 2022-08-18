import { useCallback } from 'react'
import Router from 'next/router'

const RouterPage = () => {
  const handleClick = useCallback(() => Router.push({
    pathname: Router?.pathname,
    query: {
      ...Router?.query,
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

export default RouterPage
