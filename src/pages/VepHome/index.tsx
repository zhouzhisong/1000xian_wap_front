import { Button, Card } from 'react-vant';
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/navBar";
import PdfViewer from "@/components/PdfViewer";
const VepHome = () => {
  const navigate = useNavigate();

  const onSubscribe = () => {
    navigate('/subscribe')
  }
  return <>

    <NavBar back="返回" title='产品介绍' />
    <Card>
      <Card.Cover >
        <PdfViewer url="https://121-guwu.obs.cn-north-1.myhuaweicloud.com/vep.pdf" />

      </Card.Cover>
      {/* <Card.Header>产品介绍</Card.Header>
      <Card.Body>产品介绍区域产品介绍区域产品介绍区域产品介绍区域产品介绍区域产品介绍区域</Card.Body> */}
      <Card.Footer>
        <Button round color='linear-gradient(to right, #ff6034, #ee0a24)' size='small' onClick={onSubscribe}>认购一亩地</Button>

      </Card.Footer>
    </Card>



  </>
}
export default VepHome