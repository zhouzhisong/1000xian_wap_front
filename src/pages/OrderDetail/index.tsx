import { useLocation } from 'react-router-dom';
import { Card, Cell, Image, Collapse } from 'react-vant';
import NavBar from "@/components/navBar";
const OrderDetail = () => {
  const { state } = useLocation();

  return <>

    <NavBar back="返回" title='订单详情' />
    <Card>
      <Card.Header>
        <Cell
          title={state.govNeedName}
          icon={<Image width={44} height={44} src={state.goodsimg} round />}
        />
      </Card.Header>
      <Card.Body>
        <Cell title='标题:' value={state.productName} />
        <Cell title='时间:' value={state.addTime} />
        <Cell title='数量:' value={state.quantity} />
        <Cell title='总价:' value={state.totalPrice} />
        <Cell title='状态:' value={state.status == 0 ? '待审核' : state.status == 1 ? '进行中' : '已完成'} />
        <Cell title='取酒方式:' value={state.pickId == 1 ? '分五年取酒' : '第3/4/5年取酒'} />
        <Collapse initExpanded={['1']}>
          <Collapse.Item title="物流信息" >
            物流信物流信息物流信息物流信息物流信息物流信息物流信息物流信息物流信息物流信息
          </Collapse.Item>
        </Collapse>
      </Card.Body>
    </Card>
  </>
}
export default OrderDetail