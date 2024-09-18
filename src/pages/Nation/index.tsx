
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { debounce } from "@/utils";
import NationDropDown from "./components/nationDropDown";
import { useNavigate } from "react-router-dom";
import { getHomeList, getRegion, getGov } from "@/service/api";
import { modifiedArray } from "@/utils";
import { List, Cell, Image, Empty, Search } from 'react-vant'
import NavBar from "@/components/navBar";
const Nation = () => {
  const [keyword, setKeyword] = useState<string | undefined>('');
  let [regionId, setRegionId] = useState<number>(0);
  let [industryId, setIndustryId] = useState<number>(0);
  const [list, setList] = useState<any[]>([])
  const [finished, setFinished] = useState<boolean>(false)
  let [pageNum, setPageNum] = useState<number>(1)
  const [region, setRegion] = useState([])
  const [gov, setGov] = useState([])
  const navigate = useNavigate();
  // 异步请求
  const fetchHomeList = async () => {
    const result = await getHomeList({
      param: keyword,
      regionId,
      industryId,
      pageSize: 10,
      pageNum
    })
    return result.data
  }


  const firstUpdate = useRef(true);
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    } else {
      setList([])
      onLoad()
    }
  }, [keyword, regionId, industryId,])

  useEffect(() => {
    const fetchRegion = async () => {
      const result = await getRegion()
      let newRegion = modifiedArray(result.data, ["value", "text"])
      setRegion(newRegion)
    }
    fetchRegion()
    const fetchGov = async () => {
      const result = await getGov()
      let newGov = modifiedArray(result.data, ["value", "text"])
      setGov(newGov)
    }
    fetchGov()
  }, [])

  //关键词改变
  const handleChange = debounce((keyword: string | undefined) => {
    setKeyword(keyword)
    setPageNum(1)
  }, 500)

  //点击全部按钮
  const searchAll = () => {
    setKeyword('')
    setRegionId(0)
    setIndustryId(0)
    setPageNum(1)
  }
  const clearKeyword = () => {
    setKeyword('')
    setPageNum(1)
  }

  const handleSearch = () => {
    console.log('去搜索', keyword, pageNum);
  }

  const goToDetail = (v: any) => {
    navigate('/nationDetail', { state: v })
  }
  const onLoad = async () => {
    const { records, pages } = await fetchHomeList()
    console.log(records, pages);

    if (records) {
      setList(v => [...v, ...records])
    }
    setPageNum(pageNum + 1)
    if (pageNum >= pages) {
      setFinished(true)
    }
  }
  return (
    <>

      <NavBar back="返回" title='全国' />
      <Search
        value={keyword}
        onChange={handleChange}
        onSearch={handleSearch}
        placeholder="请输入关键词"
        showAction
        actionText={<div onClick={() => searchAll()}>全部</div>}
        onClear={() => clearKeyword()}
      />
      <NationDropDown setRegionId={setRegionId} setIndustryId={setIndustryId} setPageNum={setPageNum} setList={setList} region={region} gov={gov} />
      <List finished={finished} onLoad={onLoad} loadingText finishedText={"我也是有底线的~"}>
        {
          list.length > 0 ? list.map((v, i) => (
            <div key={i} style={{ margin: "10px", }}>
              <Cell
                onClick={() => goToDetail(v)}
                title={v.govNeedName}
                icon={<Image width={44} height={44} src={v.imgUrl} round />}
              />
            </div>
          )) : <Empty description="暂无数据" />
        }
      </List>
    </>
  )
}

export default Nation