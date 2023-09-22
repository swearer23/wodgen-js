'use client'
import {BiSolidMessageAltEdit, BiSend} from 'react-icons/bi'

export default function UserInput ({
  onSubmit,
  loading
}: {
  onSubmit: (input: string) => void,
  loading: boolean
}) {
  let input = ''
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input = e.target.value
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit(input)
    }
  }

  return (
    <>
      <div className='mb-5'>
        <BiSolidMessageAltEdit className="inline-block mr-2" size="24" />Tell me how you want to tailor
      </div>
      <div className='relative'>
        <input
          disabled={loading}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => onSubmit(input)}>
          <BiSend className="absolute right-5 top-2" size="32" />
        </button>
      </div>
    </>
  )
}