import { Cell, Dialog } from "react-vant";
import { useNavigate } from "react-router-dom";
import UserHeader from "./components/UserHeader";
import { clearAllStorage } from "@/utils/storage";
import NavBar from '@/components/navBar'
const User = () => {
  const navigate = useNavigate();
  //退出
  const logout = () => {
    Dialog.confirm({
      title: '确定要退出吗？',
      onCancel: () => console.log('cancel'),
      onConfirm: () => {
        console.log('退出');

        clearAllStorage()
        navigate(0)
      },
    })
  }

  //跳转订单列表页面
  const goToOrderList = () => {
    navigate('/orderList');
  }
  return <>
    <NavBar back="返回" title='我的' />
    <UserHeader />
    <Cell.Group card>
      <Cell title='订单列表' className="iconfont icon-dingdan" isLink onClick={goToOrderList} />
      <Cell title='退出登录' className="iconfont icon-tuichu" isLink onClick={logout} />
    </Cell.Group>
  </>
}

export default User