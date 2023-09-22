'use client'
import WhiteBoard from "./whiteboard"
import UserInput from "./UserInput"
import { useState, useEffect } from "react"
import { Wod } from "@/types"

export default function Dialog({
  startNewSession,
  tailorMsg,
  originWod
}: {
  startNewSession: (tailorMsg: string, wod: Wod) => void,
  tailorMsg?: string,
  originWod?: Wod
}) {
  const [wod, setWod] = useState(null as unknown as Wod)
  const [loading, setLoading] = useState(false)
  const generateWod = async () => {
    setLoading(true)
    const response = await fetch('/api/wod', {
      method: 'POST',
      body: JSON.stringify({})
    })
    const data = await response.json() as Wod
    setWod(data)
    setLoading(false)
  }

  const tailorWod = async (tailorMsg: string, originWod: Wod) => {
    setLoading(true)
    const response = await fetch('/api/wod/tailor', {
      method: 'POST',
      body: JSON.stringify({
        tailorMsg,
        originWod
      })
    })
    const data = await response.json() as Wod
    setWod(data)
    setLoading(false)
  }

  useEffect(() => {
    if (!wod && !loading && tailorMsg && originWod) {
      tailorWod(tailorMsg, originWod)
    } else if (!wod && !loading) generateWod()
  }, [])
  return (
    <>
      <WhiteBoard loading={loading} wod={wod} />
      <UserInput onSubmit={(tailorMsg) => startNewSession(tailorMsg, wod)} loading={loading} />
    </>
  )
}