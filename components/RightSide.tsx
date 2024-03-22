import React from 'react'
import RightCard from './RightSide/RightCard'
import { Right_Data } from '@/data'
const RightSide = () => {
  return (
    <div className='absolute h-screen right-0 top-0 w-screen md:w-[18%]  flex flex-col gap-6'>
        <h1 className='border border-red-500 font-bold uppercase w-28 text-center mx-auto text-red-500 bg-slate-300'>Market</h1>
        {
            Right_Data.map((item,index)=>(
                <div key={index}>
                    <RightCard title={item.title} content={item.content} link={item.link} />
                </div>
            ))
        }
    </div>
  )
}

export default RightSide