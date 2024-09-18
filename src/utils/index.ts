// 批量修改数组对象的属性名
export const modifiedArray = (arr: [], names: string[]) => {
  const newArr: any = []
  arr.forEach(item => {
    const objL = Object.entries(item)
    objL.forEach((ite, i) => {
      if (names[i] === undefined) return
      ite[0] = names[i]
    })
    newArr.push(Object.fromEntries(objL))
  })
  return newArr
}


export const debounce = (fn: any, delay: number) => {
  // 定义一个定时器来来记录上一次的定时器函数的状态
  let timer: any = null
  // 2 在接受这两个值时需要返回一个函数  (真正需要执行的函数)
  const _debounce = function (this: any, ...args: any) {   //这里处理args传递的参数
    // 3 在处理防抖时 需要只执行一次 这里需要一个计时器
    // 4 计时器有一个返回的id属性值 ,利用返回的id,让函数只执行最后一次
    // 5 如果有这个id 则取消上一次计时器
    if (timer) clearInterval(timer)   //取消上一次定时器
    timer = setTimeout(() => {    //延迟执行
      fn.apply(this, args)         //外部传入的函数         
      //在这里重新绑定this(不绑定this指向的是windows =>这里改变this重新指向调用者input)

    }, delay)
  }
  return _debounce
  // 问题: 主函数需要先执行 ,只不过返回的是undefined
  //undefined 游览器自己处理不做判断
}
