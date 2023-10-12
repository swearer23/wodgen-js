'use client'
import Dialog from "../../components/Dialog"
import { useState } from "react"
import { Wod } from "@/types"

export default function Home() {
  const [dialogs, setDialogs] = useState<{ tailorMsg: string, originWod: Wod }[]>([])

  const startNewSession = (tailorMsg: string, originWod: Wod) => {
    setDialogs(prevDialogs => [...prevDialogs, { tailorMsg, originWod }])
    console.log(tailorMsg, originWod)
  }

  return (
    <div className="w-full text-left">
      <Dialog startNewSession={startNewSession} />
      {
        dialogs.map((dialog, index) => {
          return (
            <div key={index} className="mt-10">
              <Dialog
                startNewSession={startNewSession}
                tailorMsg={dialog.tailorMsg}
                originWod={dialog.originWod}
              />
            </div>
          )
        })
      }
    </div>
  )
}
