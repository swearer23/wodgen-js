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
        <h1>
          <BsBookmarkStar className="inline-block mr-2" />
          {wod.title}
        </h1>
        <p>{wod.description}</p>
        <section className='gap-4 grid grid-flow-col justify-start'>
          <div className="badge badge-neutral">{wod.type}</div>
          <div className="badge badge-neutral">{wod.timecap}</div>
          {wod.round && <div className="badge badge-neutral">{wod.round}</div>}
        </section>
        <section>
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