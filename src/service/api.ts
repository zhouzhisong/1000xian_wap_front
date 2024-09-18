import request from "./request";

//获取地域分类
export const getRegion = () => {
  return request.get('/index/region')
}

// 获取需求分类
export const getGov = () => {
  return request.get('/index/govindustry')
}

//首页gov/home
export const getHomeList = (param: any) => {
  return request.post('/gov/home', { ...param })
}

//首页 company/home
export const getCompanyList = (param: any) => {
  return request.post('/company/home', { ...param })
}

//面向企业 首页 tabs index/companyindustry
export const getTabs = () => {
  return request.get('/index/companyindustry')
}

//登录 user/login

export const goLogin = (params: any) => {
  return request.post('/user/login', params)
}

//获取验证码  user/getcode?mobile=18600559604
export const getCode = (mobile: string) => {
  return request.get(`/user/getcode?mobile=${mobile}`)
}


//生成订单 /order/save
export const generateOrder = (param: any) => {
  return request.post('/order/save', { ...param })
}

//取酒方式 index/vepepicktype
export const getVepPicktype = () => {
  return request.get('/index/vepepicktype')
}

//打款信息 /index/payment
export const getPayment = () => {
  return request.get('/index/payment')
}

// 订单列表 order/list
export const orderList = (param: any) => {
  return request.post('/order/list', { ...param })
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
// export function get(url: string, params: {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     }).then(res => {
//       resolve(res.data);
//     }).catch(err => {
//       reject(err.data)
//     })
//   });
// }