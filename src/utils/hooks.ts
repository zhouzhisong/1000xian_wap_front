import { useEffect, useRef } from "react"
const useUpdateEffect = (effect: () => any, deps: any) => {
  const flag = useRef(true)
  useEffect(() => {
    if (flag.current) {
      flag.current = false      //当deps第一次变化时，不执行effect函数，而将flag.current置为false
    } else {
      return effect()           //当deps第二次变化时，执行effect函数
    }
  }, deps)
}



export {
  useUpdateEffect,
}