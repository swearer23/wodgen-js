'use client'
import Subscribe from './components/Subscribe';
import Tab from './components/ui/tab';
import WhiteBoard from './components/whiteboard';
import { TabOption, Wod } from '@/types';
import { WOD_TYPE } from '@/const';
import { useState, useEffect } from 'react';

const Index = () => {
  const [activeType, setActiveType] = useState('AMRAP' as string)
  const [wodList, setWodList] = useState<Wod[] | undefined>(undefined)
  const [activeWod, setActiveWod] = useState<Wod | undefined>(undefined)

  const onTabClick = (value: string) => {
    setActiveType(value)
  }
  let wodType = Object.keys(WOD_TYPE).map((key: String) => ({name: WOD_TYPE[key as keyof typeof WOD_TYPE], value: key}))
  if (wodList == undefined) {
    if (typeof window !== 'undefined') {
      fetch('/api/wod', {
        method: 'GET'
      }).then(async res => {
        if (res.status === 200) {
          setWodList((await res.json()).data)
        }
      })
    }
  }
  
  useEffect(() => {
    if (wodList) {
      setActiveWod(wodList.find(wod => wod.type === WOD_TYPE[activeType as keyof typeof WOD_TYPE]))
    }
  }, [activeType, wodList])

  return (
    <>
      <div>
        <h1 className="sm:text-6xl text-4xl max-w-[708px] text-gray-200 antialiased mb-4">
          Generate your next <span className='maroon'>WOD</span> using AI Assistant
        </h1>
        {/* <button className="btn btn-active btn-sm bg-gray-800 border-red-700 text-white mb-5">Sign Up</button> */}
        <p>Subscribe to receive <b className='maroon'>FREE</b> WOD Everyday</p>
      </div>
      <Subscribe />
      <hr className='mt-10' />
      <div className='mt-10'>
        <Tab tabOptions={wodType as TabOption[]} activeValue={activeType} onTabClick={onTabClick}>
          {activeWod && <WhiteBoard wod={activeWod} loading={!wodList} />}
        </Tab>
      </div>
    </>
  )
}

export default Index
