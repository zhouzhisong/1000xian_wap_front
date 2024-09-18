import { useEffect, useState, } from 'react';
import { useNavigate } from "react-router-dom";
import { Input, Form } from 'react-vant'
import SendCode from "@/components/SendCode";
import { goLogin } from "@/service/api";
import { setToken, setItem } from "@/utils/storage";
import s from './style.module.less'
import NavBar from "@/components/navBar";
import { Button, Toast } from 'antd-mobile'
interface User {
  mobile: number | string
  code: number
}

const Login = () => {

  const [form] = Form.useForm()

  const [value, setValue] = useState<string>()
  const [disable, setDisable] = useState<boolean>(false)

  const navigate = useNavigate();

  useEffect(() => {
    console.log();
    //当value有值，且符合手机号匹配规则的时候，传到验证码组件一个布尔值，去控制 '获取验证码' 按钮是否可点击
    if (value && /^1\d{10}$/.test(value)) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [value])


  const fetchLogin = async (mobile: string | number, code: number) => {
    let res = await goLogin({
      mobile,
      code
    })

    return res
  }
  const onFinish = async (values: User) => {
    const { mobile, code } = values
    if (mobile && code) {
      fetchLogin(mobile, code).then((res: any) => {
        console.log(res);

        if (res.code == '200') {
          setToken(JSON.stringify(res.data.token)); //模拟设置token
          setItem('user', JSON.stringify(res.data))
          navigate(-1)
        } else {
          Toast.show({
            content: res.message,
          })
        }
      })
    }
  }

  const onChange = (val: string) => {
    setValue(val)
  }


  return <>

    <NavBar back="返回" title='登录' rightText='回到首页' />
    <div className={s.loginContainer}>
      <Form
        form={form}
        onFinish={onFinish}
        footer={
          <div style={{ margin: '16px 16px 0' }}>
            <Button shape="rounded" type='submit' color='primary' block>
              登录
            </Button>
          </div>
        }
      >
        <Form.Item
          rules={[{ required: true, message: '请填写手机号' }, {
            validator(_, value) {
              if (/^1\d{10}$/.test(value)) {
                return Promise.resolve(true)
              }
              return Promise.reject(new Error('请输入正确的手机号码'))
            },
          }]}
          name='mobile'
          label='手机号'
        >
          <Input placeholder='请输入手机号' value={value} onChange={onChange} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: '请填写验证码' }]}
          name='code'
          label='验证码'
        >
          <Input
            suffix={<SendCode disable={disable} mobile={value} />}
            placeholder="请输入验证码"
          />
        </Form.Item>
      </Form>
    </div>
  </>
}
export default Login