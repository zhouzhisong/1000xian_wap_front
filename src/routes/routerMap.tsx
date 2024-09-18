import { lazy } from "react";
import { Navigate } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
const Home = lazy(() => import('@/pages/Home'))
const Info = lazy(() => import('@/pages/Info'))
const User = lazy(() => import('@/pages/User'))
const Recommend = lazy(() => import('@/pages/Recommend'))
const Login = lazy(() => import('@/pages/Login'))
const Nation = lazy(() => import('@/pages/Nation'))
const Company = lazy(() => import('@/pages/Company'))
const Search = lazy(() => import('@/pages/Search'))
const Map = lazy(() => import('@/pages/Map'))
const Register = lazy(() => import('@/pages/Register'))
const Train = lazy(() => import('@/pages/Train'))
const Procure = lazy(() => import('@/pages/Procure'))
const CompanyDetail = lazy(() => import('@/pages/CompanyDetail'))
const NationDetail = lazy(() => import('@/pages/NationDetail'))
const VepHome = lazy(() => import('@/pages/VepHome'))
const Subscribe = lazy(() => import('@/pages/Subscribe'))
const OrderList = lazy(() => import('@/pages/OrderList'))
const SubAgreement = lazy(() => import('@/pages/SubAgreement'))
const OrderDetail = lazy(() => import('@/pages/OrderDetail'))

export const routerMap: any = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/orderList',
    element: (
      <PrivateRoute>
        <OrderList />
      </PrivateRoute>)
  },
  {
    path: '/SubAgreement',
    element: (
      <PrivateRoute>
        <SubAgreement />
      </PrivateRoute>
    )
  },

  {
    path: '/subscribe',
    element: (
      <PrivateRoute>
        <Subscribe />
      </PrivateRoute>)
  },
  {
    path: '/vepHome',
    element: <VepHome />
  },

  {
    path: '/info',
    element: <Info />
  },
  {
    path: '/nation',
    element: <Nation />
  },
  {
    path: '/company',
    element: <Company />
  },
  {
    path: '/nation',
    element: <Nation />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/map',
    element: <Map />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/train',
    element: <Train />
  },
  {
    path: '/procure',
    element: <Procure />
  },
  {
    path: '/companyDetail',
    element: <CompanyDetail />
  },
  {
    path: '/nationDetail',
    element: <NationDetail />
  },
  {
    path: '/recommend',
    element: <Recommend />
  },
  ,
  {
    path: '/orderDetail',
    element: <OrderDetail />
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  }, //其他没有被注册过的路径统一重定位到login
]