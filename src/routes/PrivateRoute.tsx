import { useEffect } from "react";
import { useNavigate, RouteProps } from "react-router-dom";
import { Toast } from "react-vant";
import { getToken } from "@/utils/storage";

// interface RouteProps {
//   children: ReactElement
// }
export const PrivateRoute = ({ children }: RouteProps) => {
  const navigator = useNavigate()

  //对比时间戳是否超过48小时
  // function isPast48Hours(timestamp: number): boolean {
  //   //获取当前时间戳
  //   const currentTimestamp = Math.floor(Date.now() / 1000)
  //   //计算时间差，单位为秒
  //   const timeDifference = currentTimestamp - timestamp
  //   //定义48小时秒数
  //   const hours48InSeconds = 48 * 60 * 60
  //   //判断时间差是否超过48小时
  //   return timeDifference > hours48InSeconds
  // }

  useEffect(() => {
    try {
      const token: any = getToken()
      console.log(token);

      const tokenObj = JSON.parse(token)

      if (tokenObj === null) {
        Toast.fail('登录已过期,请重新登录')
        navigator('/login')
      }
    } catch (error) {
      console.log(error);

      Toast.fail('登录已过期,请重新登录')
      navigator('/login')
    }
  }, [])
  return <>
    {children}
  </>
}

export default PrivateRoute