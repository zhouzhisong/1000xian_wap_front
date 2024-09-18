import { Cell } from 'react-vant';
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/navBar";

const Procure = () => {
  const navigate = useNavigate();

  const goToVep = () => {
    navigate('/vepHome')
  }
  return <>

    <NavBar back="返回" title='千县采购' />
    <Cell title='酱香酒VEP' value='去了解' isLink onClick={goToVep} />
  </>
}
export default Procure