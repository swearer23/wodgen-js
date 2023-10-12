'use client'
import { useState } from "react"
import { TabOption } from "@/types"

const Tab = ({
  tabOptions,
  onTabClick,
  activeValue,
  children
}: {
  tabOptions: TabOption[],
  onTabClick: (value: string) => void,
  activeValue?: string | undefined,
  children?: React.ReactNode
}) => {

  if (activeValue) {
    tabOptions.forEach((item: TabOption) => {
      if (item.value == activeValue) {
        item.active = true
      }
    })
  } else {
    tabOptions[0].active = true
  }
  
  const [tabs, setTabs] = useState(tabOptions)

  const handleTabClick = (value: string) => {
    tabs.forEach(item => {
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
    <>
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
      {children}
    </>
  )
}

export default Tab
