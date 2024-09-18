import { Image, Flex } from 'react-vant';
import NavBar from "@/components/navBar";

const Train = () => {

  return <>
    <div style={{
      height: '100vh',
      backgroundColor: '#fff'
    }} >

      <NavBar back="返回" title='千县培训' />
      <Flex justify='center' align='center' direction='column'  >
        <Flex.Item span={20} >
          <Image width='100%' src="https://qxcdn.121mai.com/qxtip2.gif" />
        </Flex.Item>
        <Flex.Item span={20} >
          <span>正在开发中...</span>
        </Flex.Item>
      </Flex>
    </div>
  </>
}
export default Train