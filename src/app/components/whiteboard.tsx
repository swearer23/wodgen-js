'use client'
import { useState, useEffect } from 'react'
import { Wod } from '@/types'
import {BsBookmarkStar} from 'react-icons/bs'

export default function WhiteBoard({
  wod,
  loading
}: {
  wod: Wod,
  loading: boolean
}) {
  if (loading) {
    return (
      <div className="mt-10">
        <span className="loading loading-ring loading-lg"></span> 
      </div>
    )
  } else if(wod) {
    return (
      <div className="mt-10 w-full prose">
        <h1 className='text-gray-200'>
          <BsBookmarkStar className="inline-block mr-2" />
          {wod.title}
        </h1>
        <p className='text-gray-300'>{wod.description}</p>
        <section className='gap-4 grid grid-flow-col justify-start text-gray-100'>
          <div className="badge badge-neutral">{wod.type}</div>
          <div className="badge badge-neutral">{wod.timecap}</div>
          {wod.round && <div className="badge badge-neutral">{wod.round} Rounds</div>}
        </section>
        <section className='text-gray-300'>
          <ul>
            {wod.exercises.map((exercise, index) => {
              return (
                <li key={index}>
                  <p>{exercise}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}