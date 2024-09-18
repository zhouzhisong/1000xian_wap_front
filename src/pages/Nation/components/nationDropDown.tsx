import { DropdownMenu } from "react-vant"
import { useState, } from 'react'

import s from './nationDropDown.module.less'
const nationDropdown = (props: any) => {
  const { setRegionId, setIndustryId, setPageNum, gov, region } = props

  const [value, setValue] = useState<Record<string, string | number>>({})

  const handleOnChange = (v: any) => {
    setPageNum(1)
    setRegionId(v.regionId)
    setIndustryId(v.industryId)
    setValue(v)
  }

  return < >
    <div className={s.selectBox}>
      <DropdownMenu direction='up' style={{ marginBottom: '5px', flex: 1 }} value={value} onChange={handleOnChange}>
        <DropdownMenu.Item placeholder="区域选择" title={''} name='regionId' options={region} />
        <DropdownMenu.Item placeholder="行业分类" title={''} name='industryId' options={gov} />
      </DropdownMenu>
    </div>
  </>
}
export default nationDropdown