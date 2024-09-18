import { useNavigate } from "react-router-dom";
import { NavBar, Space } from 'antd-mobile'
import styles from "./style.module.less";

interface NavBar {
  back?: string
  title?: string
  left?: string,
  rightText?: string
}

export default ({ back, title, rightText = '' }: NavBar) => {

  const right = (
    <div style={{ fontSize: 15 }} onClick={() => navigate('/')}>
      <Space style={{ '--gap': '16px' }}>
        {rightText}
      </Space>
    </div>
  )
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  }
  return <>
    <NavBar back={back} className={styles.container} onBack={goBack} right={right} >
      {title}
    </NavBar>
  </>
}
