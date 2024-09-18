import { useEffect, useState } from "react";
import s from './style.module.less'
import { useNavigate } from "react-router-dom";
import { getItem } from "@/utils/storage";
import { Avatar, List } from "antd-mobile";
const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
const UserHeader = () => {

  //看下是否有token
  const [user, setUser] = useState<any>()
  const navigate = useNavigate()

  useEffect(() => {
    setUser(getItem('user'))
  }, [])
  const goToLoginOrRegister = () => {
    if (user) {
      return
    }
    navigate('/login')
  }
  return <>

    <div className={s.avatar} onClick={goToLoginOrRegister}>
      <List className={s.card} >
        <List.Item
          prefix={<Avatar src={demoAvatarImages[0]} />}
          description={`${user ? "" : "登录/注册"}`}
        >
          {`${user ? JSON.parse(user).mobile : "未登录"}`}
        </List.Item>
      </List>
    </div>
  </>
}
export default UserHeader