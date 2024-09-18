import type { FC } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { TabBar } from 'antd-mobile'
import { AppOutline, MessageOutline, UserOutline } from 'antd-mobile-icons'

import styles from './style.module.less'


const tabs = [
  {
    key: '/',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/info',
    title: '消息',
    icon: <MessageOutline />,
  },
  {
    key: '/user',
    title: '我的',
    icon: <UserOutline />,
  },
]

const Bottom: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const setRouteActive = (value: string) => {
    navigate(value)
  }

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default () => {
  return (
    <div className={styles.tabBar}>
      <Bottom />
    </div>
  )
}

