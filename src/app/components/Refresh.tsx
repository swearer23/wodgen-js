'use client'
import { BiRefresh } from "react-icons/bi"
import Fab from '@mui/material/Fab';
import Loading from './Loading';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function RefreshButton() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const refresh = () => {
    setLoading(true)
    router.push(`/wod/refresh?r=${new Date().getTime()}`)
  }
 
  return (
    <div className="flex justify-center opacity-50">
      <Fab>
        <BiRefresh size="2em" onClick={refresh}/>
      </Fab>
      {loading && <Loading />}
    </div>
  )
}