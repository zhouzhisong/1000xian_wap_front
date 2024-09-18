import { Swiper, Image, Flex, } from 'react-vant';
import { useNavigate } from "react-router-dom";
import s from './style.module.less'
import Header from "./components/Header";
import Font from "./components/Font";
const images = [
  'https://qxcdn.121mai.com/wapsy1.png',
  'https://qxcdn.121mai.com/wapsy2.jpg',
]
const Home = () => {
  const navigate = useNavigate()

  const goPage = (path: string) => {
    navigate(`/${path}`)
  }
  return <>
    <Header />
    <Swiper className={s.swiper}>
      {images.map((image) => (
        <Swiper.Item className={s.swiperItem} key={image}>
          <Image lazyload src={image} />
        </Swiper.Item>
      ))}
    </Swiper>
    <Font />
    <div className={s.flex}>
      <Flex className={s.cardCountry} justify='center' align='center'>
        <Flex.Item span={18} onClick={() => goPage('nation')}>全国区县资源查询</Flex.Item>
      </Flex>
      <Flex className={s.cardVillage} justify='center' align='center'>
        <Flex.Item span={18} onClick={() => goPage('company')}>当地需求查询</Flex.Item>
      </Flex>
      <Flex >
        <Flex.Item className={s.cardTrain} onClick={() => goPage('train')} >千县培训</Flex.Item>
        <Flex.Item className={s.cardProcure} onClick={() => goPage('procure')} >千县采购</Flex.Item>
      </Flex>
    </div>
  </>
}

export default Home