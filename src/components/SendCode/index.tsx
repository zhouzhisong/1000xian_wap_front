
import { useState, } from 'react';
import { CountDown, Toast, } from 'react-vant';
import { getCode } from "@/service/api";

const SendCode = ({ disable, mobile }: { disable: boolean, mobile: string | undefined }) => {
  console.log('mobile', mobile);


  const [time, setTime] = useState(2 * 60 * 1000)
  console.log(time);

  const [show, setShow] = useState(true)

  const getVerificationCode = async () => {
    if (disable) {
      Toast.info('请先输入手机号')
      return
    }
    await getCode(mobile!).then((res: any) => {
      console.log(res);

      if (res.code == '200') {
        Toast.info('验证码已发送至您手机')
        setShow(!show)
      }
    })
  }

  //倒计时结束时触发
  const onFinish = () => {
    setTime(2 * 60 * 1000)
    setShow(!show)
  }
  return <>
    <div className="send-code">
      {
        show ?
          (
            <div className="code-btn" onClick={getVerificationCode} >
              <span>获取验证码</span>
            </div>)
          :
          (
            <div className="send-text">
              <CountDown time={time} onFinish={onFinish} format="ss" />
            </div>
          )
      }



    </div>
  </>
}
export default SendCode