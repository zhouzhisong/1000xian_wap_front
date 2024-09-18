import { useEffect, useState } from 'react'
// import Router from '@/routes'
import { useLocation } from 'react-router-dom';
import TabBar from '@/components/tabBar'
import s from './style.module.less'
import RouteList from '@/routes'
import cs from 'classnames'
function App() {
  const [showNav, setShowNav] = useState(false)
  const needNav = ['/', '/home', '/info', '/recommend', '/user',]
  const { pathname } = useLocation()
  // --rv-nav-bar-text-color
  useEffect(() => {
    setShowNav(needNav.includes(pathname))
  }, [pathname])

  return (
    <>
      <RouteList />
      {
        < div className={cs({ [s.hidden]: showNav == false })}>
          <TabBar />
        </div>
      }

    </>
  )
}

export default App
