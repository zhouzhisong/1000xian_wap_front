import axios from "axios";
// import { Toast } from 'antd-mobile'
import { BASE_URL, TIMEOUT } from "./config";
import { getToken } from "@/utils/storage";
// import { showMessage } from './statusMessage'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})


instance.interceptors.request.use(config => {

  //在请求汇总添加Token
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`
  }
  return config
}, error => {
  console.log(error);
})

instance.interceptors.response.use(response => {
  console.log(response);
  // response.data.message && Toast.show({
  //   content: response.data.message,
  //   afterClose: () => {
  //     console.log('after')
  //   },
  // })
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response);
  }
}, error => {
  console.log(error);

  // const { code } = error
  // if (code) {
  //   showMessage(code)
  // }
})

export default instance;