'use client'
import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { WOD_TYPE } from '@/const';

export default function DisableElevation({
  onSelectType
} : {onSelectType: (type: String) => void}) {

  const changeType = (type: String) => {
    onSelectType(type)
  }

  return (
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
            <Button key={key} onClick={() => changeType(type)}>{type}</Button>
          )
        })
      }
    </ButtonGroup>
  );
}