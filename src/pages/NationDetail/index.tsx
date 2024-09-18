

import { useLocation, } from "react-router-dom";
import { Cell, Image, Typography, Card } from "react-vant";
import NavBar from "@/components/navBar";
const NationDetail = () => {
  const { state } = useLocation();

  return <>
    <NavBar back="返回" title='面向全国' />
    <Cell
      title={state.govNeedName}
      icon={<Image width={44} height={44} src={state.imgUrl} round />}
    />
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <Typography.Text>
          {state.introduction}
        </Typography.Text>
      </Card.Body>
    </Card>

  </>
}
export default NationDetail