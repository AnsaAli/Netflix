import React from 'react'

export const Banner = () => {
  return (
    <div className="relative ">
      {/* <div className='absolute w-full bg-gradient-to-r from-black'></div> */}
        <img 
          className='absolute  w-full  '
        alt='bannerImage'
        src='https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfEjpO0KYs2eszueBhHWXGDGGTwAaPxieyY5J6nus5u8QIGBL607tJoUrrmyHFipm0xn9oQsC4oJrN_Zlsgwa_TWBkDtNwX-9m3S.webp?r=672' />
        
        <img 
         className='absolute  top-52 left-86  transform-translate-x-1/2 -translate-y-1/2'
         alt='movie-name'
        src='https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbmEqk30zVUP0MZxA5jHeRSafGPVU2UcBNexOCIHai77DhHhtXnoyota4cDjLStzBAVLmOiLodKT7kg5qFLxKlEgtnucqD_G5Jp42wChUp-_.webp?r=991'/>
        
        <div className='absolute top-80 left-9'>
        <div className='flex mt-4'>
        <button className='bg-red-600 font-bold leading-tight text-white p-2 rounded-md'>
            TOP  <span className='block mt-0'>10</span>
        </button>
        <p className='text-white ml-5 mt-2 font-bold text-2xl'>N0. 1 Films Today</p>
        </div>
        <p className='text-white mt-4 text-xl'>
          When his prized possession gets stolen, a barber seeks help from <br />
          the police, who jeer at his request - until they learn what they're <br />
          really looking for.
        </p>
        </div>
    </div>
  )
}
