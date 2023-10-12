'use client'
import { useState } from "react"
import { SuccessToast, ErrorToast } from "./ui/toast"
import { ToastContainer } from 'react-toastify'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email })
    }).then(async res => {
      const data = await res.json()
      if (res.status === 200) {
        SuccessToast(data.message)
      } else {
        ErrorToast(data.error)
      }
    }).finally(() => {
      setLoading(false)
    })
  }

  return (
    <>
      <form onSubmit={onSubmit} className="join mt-4">
        <input
          className="input input-ghost join-item focus:bg-transparent focus:text-white focus:shadow-transparent"
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <button className="btn join-item bg-red-800 text-white border-0" disabled={loading} type="submit">
          {loading && <span className="loading loading-spinner"></span>}
          Subscribe
        </button>
      </form>
      <ToastContainer />
    </>
  )
}

export default Subscribe