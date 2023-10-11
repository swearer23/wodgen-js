'use client'
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email })
    }).then(res => {
      if (res.status === 200) {
        toast.success('Thank you for subscribing!', {
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: true,
        })
      } else {
        toast.error('Thank you for subscribing!')
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