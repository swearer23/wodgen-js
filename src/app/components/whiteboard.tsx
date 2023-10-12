import { Wod } from '@/types'
import { prependNumber } from '@/utils'
import { WOD_TYPE } from '@/const'

const iconImgStyle = {
  width: '1rem',
  height: '1rem',
  display: 'inline-block',
  verticalAlign: 'middle',
}

export default function WhiteBoard({
  wod,
  loading
}: {
  wod: Wod,
  loading: boolean
}) {
  if (loading) {
    return (
      <div className="mt-5">
        <span className="loading loading-ring loading-lg"></span> 
      </div>
    )
  } else if(wod) {
    return (
      <div className="mt-5 w-full prose">
        <h1 className='text-gray-200' style={{
          fontSize: '1.5em',
          color: '#f5f5f5',
        }}>
          {wod.title}
        </h1>
        <section className='gap-4 grid grid-flow-col justify-start' style={{color: '#CCC'}}>
          <div>
            <img className='m-0 mr-2' style={iconImgStyle} src='/images/icons/train@2x.png' />
            {wod.type}
          </div>
          <div>
            <img className='m-0 mr-2' style={iconImgStyle} src='/images/icons/clock@2x.png' />
            {wod.timecap}
          </div>
          {wod.round && <div>{wod.round} Rounds</div>}
        </section>
        <p className='text-gray-300' style={{
          color: '#CCC',
          fontSize: '0.9em'
        }}>{wod.description}</p>
        <section className='text-gray-300 py-1.5 mb-5' style={{backgroundColor: '#333', borderRadius: '0.5rem', borderTop: '0.5rem solid #CC252B'}}>
          <ul style={{listStyle: 'none', paddingLeft: '1rem'}}>
            {wod.exercises.map((exercise, index) => {
              return (
                <li key={index} className='flex p-0 align-middle' style={{lineHeight: '44px'}}>
                  <span className='inline-block' style={{
                    width: '40px',
                    fontSize: '24px',
                    fontFamily: "'Roboto Mono', monospace",
                    color: '#999'
                  }}>{prependNumber(index + 1, 2)}</span>
                  <p className='m-0' style={{color: '#', fontSize: '16px'}}>
                    {exercise}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    )
  }
}