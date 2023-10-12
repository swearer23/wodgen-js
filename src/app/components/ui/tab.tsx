import { useState } from "react"
import { TabOption } from "@/types"

const Tab = ({
  tabOptions,
  activeValue,
  onTabClick,
}: {
  tabOptions: TabOption[],
  activeValue: string,
  onTabClick: (value: string) => void,
}) => {

  tabOptions.forEach((item: TabOption, idx: number) => {
    if (item.value == activeValue) {
      item.active = true
    }
  })
  const [tabs, setTabs] = useState(tabOptions)

  const handleTabClick = (value: string) => {
    tabs.forEach((item, idx) => {
      if (item.value == value) {
        item.active = true
      } else {
        item.active = false
      }
    })
    setTabs([...tabs])
    onTabClick(value)
  }

  return (
    <div className="tabs tabs-boxed mb-5 grid grid-flow-col justify-stretch" style={{
      height: '48px',
      padding: '0',
      backgroundColor: '#333',
    }}>
      {tabs.map((item) => {
        let className = item.active ? 'tab tab-active' : 'tab'
        let style = {
          color: '#F5F5F5',
          height: '100%',
          backgroundColor: '#333',
          fontSize: '12px',
        }
        if (className.includes('active')) {
          style.backgroundColor = '#CC252B'
        }
        return (
          <button key={item.value} onClick={() => {handleTabClick(item.value)}} className={className} style={style}>{item.name}</button>
        )
      })}
    </div>
  )
}

export default Tab
