import { Card, Image } from 'react-vant'
import s from './style.module.less'
import NavBar from "@/components/navBar";
const Info = () => {

  return (
    <>
      <NavBar back="返回" title='联系我们' />
      <Card round style={{ marginBottom: 20 }}>
        <Card.Cover className={s.cardCover} >
          <Image width={'50%'} height={'50%'} src={'https://qxcdn.121mai.com/lhqqxwewm.png'} />
        </Card.Cover>
        <Card.Header

        >
          联系我们:
        </Card.Header>
        <Card.Body >
          <div >联系人: 李先生</div>
          <div>电话: 13911408166</div>
          <div >地址: 北京市朝阳区十里堡甲3号城市广场B座22层</div>
        </Card.Body>

      </Card>

    </>
  )
}

export default Info


