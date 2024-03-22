import React from 'react'
import { rightprops } from '@/data'
const RightCard = ({title,content,link}:rightprops) => {
  return (
    <div className='w-full  py-4 px-16 border'>
        <img className='w-full' src={link} alt="" />
        <h1 className='text-center'>{title}</h1>
        <h2>{content}</h2>
        
    </div>
  )
}

export default RightCard