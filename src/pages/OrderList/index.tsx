import { useState } from 'react';
import { List, Empty, Cell, Image } from 'react-vant';
import { useNavigate } from "react-router-dom";
import { orderList } from "@/service/api";
import { getItem } from "@/utils/storage";
import NavBar from "@/components/navBar";

const OrderList = () => {
  interface List {
    id: number
    status: number
    pickId: number
    totalPrice: string | number
    logisticInfoId: string
  }
  const [list, setList] = useState<List[]>([])
  let [pageNum, setPageNum] = useState<number>(1)
  const [finished, setFinished] = useState<boolean>(false)

  const navigate = useNavigate();


  const fetchOrderList = async () => {

    const result = await orderList({
      uid: JSON.parse(getItem('user')).id,
      pageNum,
      pageSize: 10
    })
    console.log(result);

    return result.data
  }

  const goToDetail = (v: List) => {
    navigate('/orderDetail', { state: v })
  }
  const onLoad = async () => {
    console.log('onload', list);

    const { records, pages } = await fetchOrderList()
    console.log(records);

    if (records) {
      setList(v => [...v, ...records])
    }
    setPageNum(pageNum + 1)
    if (pageNum >= pages) {
      setFinished(true)
    }
  }
  return <>
    <NavBar back="返回" title='订单列表' />
    <List finished={finished} onLoad={onLoad} loadingText finishedText={"我也是有底线的~"}>
      {
        list.length > 0 ? list.map((v) => (
          <div key={v.id + Math.random()} style={{ margin: "10px 0", }}>
            <Cell
              onClick={() => goToDetail(v)}
              style={{ boxShadow: " rgb(227, 226, 226) -1px 1px 5px" }}
              icon={<Image width={44} height={44} src='/demo_1.jpg' round />}
              label='Deserunt'
              title={`订单信息一`}
              isLink
              value={`${v.status == 0 ? '待审核' : v.status == 1 ? '进行中' : '已完成'}`}
            />
          </div>
        )) : <Empty description="暂无数据" />
      }
    </List>

  </>
}
export default OrderList