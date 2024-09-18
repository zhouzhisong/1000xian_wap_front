import { useLocation } from "react-router-dom";
import { Cell, Image, Card } from "react-vant";
import NavBar from "@/components/navBar";
<NavBar back="返回" title='企业详情' />
const CompanyDetail = () => {
  const { state } = useLocation();


  return <>
    <NavBar back="返回" title='企业详情' />
    <Card>
      <Card.Header>
        <Cell
          title={state.govNeedName}
          icon={<Image width={44} height={44} src={state.goodsimg} round />}
        />
      </Card.Header>
      <Card.Body>
        <Cell title='产品名称' label={state.productName} />
        <Cell title='产品亮点' label={state.goodat} />
        <Cell title='产品参数' label={state.goodsparam} />
        <Cell title='产品说明' label={state.introduction} />
        <Cell title='产品图片' label={state.introduction} />
        <Cell title='产品文件下载' label={state.goodsparam} />
        <Cell title='销售对象' label={state.salegroup} />
        <Cell title='用户案例' label={state.usercase} />
        <Cell title='联系方式' label={state.mobile} />
      </Card.Body>
    </Card>
  </>
}
export default CompanyDetail