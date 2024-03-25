import { Right_Data, pageState } from '@/data'
import React from 'react'
import RightCard from './RightCard'
import { useRecoilState } from 'recoil';

const RightSideContainer = () => {
    const [page,setPage] = useRecoilState(pageState);
  return (
    <div className={`absolute  h-screen right-0 top-11 lg:top-0 w-screen lg:w-[18%]  flex flex-col  z-0  ${page === "side"? "block": "hidden lg:block "}`}>
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

export default RightSideContainer