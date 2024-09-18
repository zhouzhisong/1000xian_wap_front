import { Card, Button, Toast, Space, Cell, Radio, hooks, Stepper } from 'react-vant'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { generateOrder } from "@/service/api";
import { getItem } from "@/utils/storage";
import NavBar from "@/components/navBar";



// interface Payment {
//   companyName: string
//   bankAccount: string
//   id: number
//   mobile: string
//   taxNo: string
//   bankName: string
// }
const Subscribe = () => {
  const [state, updateState] = hooks.useSetState<{ price: number, num: number | null }>({
    price: 12000,
    num: 1,
  })

  const [loading, setLoading] = useState(false)
  const [pickId, setPickId] = useState<string>('1')
  // const [payment, setpayment] = useState<Payment>({
  //   companyName: "",
  //   bankAccount: "",
  //   id: 1,
  //   mobile: "",
  //   taxNo: "",
  //   bankName: "string"
  // })

  const navigate = useNavigate();


  // const fetchPaymentInfo = async () => {
  //   const result = await getPayment()
  //   return result.data[0]
  // }
  // useEffect(() => {
  //   fetchPaymentInfo().then(res => {
  //     setpayment(res)
  //   })
  // }, [])

  const goToSubAgreement = () => {
    navigate('/subAgreement')
  }
  const goToOrderList = () => {
    navigate('/orderList')
  }
  const onRadioChange = (name: string) => {
    setPickId(name)
  }
  //生成订单
  const saveOrder = async () => {
    if (!state.num) {
      return Toast.info('请输入购买数量')
    }
    setLoading(true)
    try {
      await generateOrder({
        unitPrice: state.price,
        quantity: state.num,
        totalPrice: state.price * state.num,
        pickId,
        uid: JSON.parse(getItem('user')).id
      }).then((res: any) => {
        if (res.code == '200') {
          setTimeout(() => {
            setLoading(false)
            Toast.info({
              message: `订单已生成`,
              duration: 2000,
              onClose: () => {
                console.log('onClose');
              }
            })
          }, 2000);
        }
      })
    } catch (error) {
      console.log(error);

    }

  }



  return <>

    <NavBar back="返回" title='认购' />
    <Card round style={{ marginBottom: 20 }}>

      {/* <Card.Cover onClick={() =>
        ImagePreview.open({
          images,
          onChange: (index) => console.log(`当前展示第${index + 1}张`),
        })
      }>
        <Image src='https://img.yzcdn.cn/vant/apple-1.jpg' />
      </Card.Cover> */}
      <Card.Header>
        认购一亩地
      </Card.Header>
      <Card.Body >
        <Cell.Group inset>
          <Cell title='单价:' value={`${state.price}元/亩`} />
          <Cell title='数量:'>
            <Stepper
              min={1}
              value={state.num}
              onChange={(num) => {
                updateState({ num })
              }}
            />
          </Cell>
          <Cell title='总价:' value={`${state.price * Number(state.num)}元`} />
          <Cell title='取酒方式:'  >
            <Radio.Group defaultValue={pickId} onChange={onRadioChange}>
              <Radio name="1">分五年取酒</Radio>
              <Radio name="2">第3/4/5年取酒</Radio>
            </Radio.Group>
          </Cell>

        </Cell.Group>
      </Card.Body>
      <Card.Header>
        打款信息
      </Card.Header>
      <Card.Body >
        <Cell.Group inset>
          <Cell title={'谷武（北京）科技有限公司'} />
          <Cell title='纳税人识别号:' label='91110101317934768K' />
          <Cell title='开户行' label='中信银行股份有限公司北京十里河支行' />
          <Cell title='开户账号' label='7118210182600009611' />
          <Cell title='电话' label='010-65851818' />
          <Cell title='查看认购协议 >>' clickable={true} onClick={goToSubAgreement} />
        </Cell.Group>
      </Card.Body>
      <Card.Footer>
        <Space>
          <Button round size='small' onClick={goToOrderList}>
            查看订单
          </Button>
          <Button
            round
            color='linear-gradient(to right, #ff6034, #ee0a24)'
            size='small'
            loading={loading}
            loadingText={'订单生成中...'}
            onClick={saveOrder}
          >
            已打款,生成订单
          </Button>
        </Space>
      </Card.Footer>
    </Card>
  </>
}
export default Subscribe