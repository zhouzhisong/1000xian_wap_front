import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Search, Tabs, List, Cell, Image, Empty } from "react-vant";
import { useNavigate } from "react-router-dom";
import { getTabs, getCompanyList } from "@/service/api";
import { debounce } from "@/utils";
import NavBar from "@/components/navBar";
const Company = () => {
  const [keyword, setKeyword] = useState<string | undefined>('');
  let [industryId, setIndustryId] = useState<number>(0);
  let [pageNum, setPageNum] = useState<number>(1)
  const [finished, setFinished] = useState<boolean>(false)
  const [tabs, setTabs] = useState([{ id: 0, content: '全部' }])
  const [list, setList] = useState<any[]>([])

  const navigate = useNavigate();


  // 异步请求
  const fetchTabs = async () => {
    const result = await getTabs()
    return result.data
  }

  const fetchCompanyList = async () => {
    const result = await getCompanyList({
      param: keyword,
      industryId,
      pageNum,
      pageSize: 10
    })
    return result.data
  }
  useEffect(() => {
    fetchTabs().then(res => {
      setTabs(v => [...v, ...res])
    })
  }, [])

  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    } else {
      setList([])
      onLoad()
    }
  }, [industryId, keyword])

  //tabs 切换
  const onChange = (_: any, tabIndex: number) => {
    console.log(tabIndex);
    setIndustryId(tabIndex)
    setPageNum(1)
  }
  //关键词改变
  const handleChange = debounce((keyword: string | undefined) => {

    setKeyword(keyword)
    setPageNum(1)

  }, 500)
  const handleSearch = () => {
    console.log('去搜索', keyword, pageNum, industryId);
  }



  //点击全部按钮
  const searchAll = () => {
    setKeyword('')
    setPageNum(1)
  }
  const goToDetail = (v: any) => {
    navigate('/companyDetail', { state: v })
  }
  const onLoad = async () => {
    const { records, pages } = await fetchCompanyList()
    if (records) {
      setList((v) => [...v, ...records])
    }
    setPageNum(pageNum + 1)
    if (pageNum >= pages) {
      setFinished(true)
    }
  }

  return <>

    <NavBar back="返回" title='区县' />
    <Search
      value={keyword}
      onChange={handleChange}
      onSearch={handleSearch}
      placeholder="请输入关键词"
      showAction={false}
      onClear={() => searchAll()}
    />
    <Tabs onChange={onChange}>
      {tabs.map(item => (
        <Tabs.TabPane key={item.id} title={item.content}>
          <List finished={finished} onLoad={onLoad} loadingText finishedText={"我也是有底线的~"}>
            {
              list.length > 0 ? list.map((v) => (
                <div key={v.productId + Math.random()} style={{ margin: "10px", }}>
                  <Cell
                    onClick={() => goToDetail(v)}
                    style={{ boxShadow: " rgb(227, 226, 226) -1px 1px 5px" }}
                    title={v.productName}
                    icon={<Image width={44} height={44} src={v.goodsimg} round />}
                  />
                </div>
              )) : <Empty description="暂无数据" />
            }
          </List>
        </Tabs.TabPane>
      ))}
    </Tabs>
  </>
}

export default Company