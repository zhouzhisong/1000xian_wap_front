import { Toast } from 'antd-mobile'
export function showMessage(status: number | string) {
  let message;
  switch (status) {
    case 200:
      message = '服务器成功返回请求的数据。';
      break;
    case 201:
      message = '新建或修改数据成功。';
      break;
    case 202:
      message = '一个请求已经进入后台排队（异步任务）。';
      break;
    case 204:
      message = '删除数据成功。';
      break;
    case 400:
      message = '发出的请求有错误，服务器没有进行新建或修改数据的操作。';
      break;
    case 401:
      message = '用户没有权限（令牌、用户名、密码错误）。';
      break;
    case 403:
      message = '用户得到授权，但是访问是被禁止的。';
      break;
    case 404:
      message = '发出的请求针对的是不存在的记录，服务器没有进行操作。';
      break;
    case 406:
      message = '请求的格式不可得。';
      break;
    case 410:
      message = '请求的资源被永久删除，且不会再得到的。';
      break;
    case 422:
      message = '当创建一个对象时，发生一个验证错误。';
      break;
    case 500:
      message = '服务器发生错误，请检查服务器。';
      break;
    case 502:
      message = '网关错误。';
      break;
    case 503:
      message = '服务不可用，服务器暂时过载或维护。';
      break;
    case 504:
      message = '网关超时。';
      break;
    default:
      message = `未知错误，状态码：${status}`;
  }
  // 显示消息提示，可以使用 Vue 的 Toast 或 Modal 组件
  Toast.show({
    content: message,
  })
  // 根据项目实际情况，这里可以替换为实际的弹窗或通知方式，比如使用 Element UI、Vuetify 或者其他 Vue 组件库的通知组件
}