import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { Loading } from "react-vant";
import { routerMap } from "./routerMap";


function RouterList() {
  let element = useRoutes(routerMap)//读取路由数组
  return element
}

function Router() {
  let style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '300px'
  }
  return (
    <Suspense fallback={<Loading type="spinner" color="#3f45ff" style={style} />}>
      <RouterList />
    </Suspense>
  )
}

export default Router