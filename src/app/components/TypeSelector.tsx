'use client'
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { WOD_TYPE } from '@/const';
import Loading from './Loading';
import { useState } from 'react';
import { useRouter } from "next/navigation";

export default function DisableElevation() {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const changeType = (type: String) => {
    setLoading(true)
    router.push(`/wod/${type}?r=${new Date().getTime()}`)
  }

  return (
    <>
      <ButtonGroup
        disableElevation
        variant="outlined"
        aria-label="Disabled elevation buttons"
      >
        {
          Object.keys(WOD_TYPE).map((k: String) => {
            const key = k as keyof typeof WOD_TYPE
            const type = WOD_TYPE[key]
            return (
              <Button key={key} onClick={() => changeType(key)}>{type}</Button>
            )
          })
        }
      </ButtonGroup>
      {loading && <Loading />}
    </>
    
  );
}