
import { Image } from 'react-vant';
import s from './style.module.less'
const Header = () => {

  return (
    <>
      <div className={s.header}>
        <Image className={s.image} lazyload src="https://qxcdn.121mai.com/logo.gif" />
      </div>
    </>
  )
}

export default Header