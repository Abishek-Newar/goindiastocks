import React from 'react'
import { center_data, pageState, showState } from '@/data'
import CentreCard from './Center/CentreCard'
import { useRecoilState } from 'recoil'
const Center = () => {
  const [show,setShow] = useRecoilState(showState)
  const [page,setPage] = useRecoilState(pageState);
  return (
    <div className={` w-screen ${page === "discussion"} ${show? "md:w-[50%] mx-auto"  : "md:w-[74%] ml-10"}`}>
      <h1 className='text-2xl border px-3 py-1 mb-6 border-red-500 text-red-500 bg-slate-200 font-bold w-72'> DISCUSSION FORUM</h1>
      {
        center_data.map((item,index)=>(
          <div key={index}>
            <CentreCard name={item.name} content={item.content} />
          </div>
        ))
      }
    </div>
  )
}

export default Center