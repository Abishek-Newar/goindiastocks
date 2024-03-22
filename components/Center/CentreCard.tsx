import React from 'react'
import { centerprops } from '@/data'
import Icon from './Icons'

const CentreCard = ({name,content}:centerprops) => {
  return (
    <div className='px-6 mb-8 border py-6 flex flex-col gap-4 shadow-lg '>
        <div className='flex items-center gap-3'>
            <div className='bg-green-300 w-8 h-8 flex items-center rounded-full justify-center'>{name.split('')[0]}</div>
            <h1 className='font-semibold'>{name}</h1>
            <button className='bg-sky-500 px-3 py-1 rounded-2xl text-white'>Follow</button>
        </div>
        <p>{content}</p>
        <Icon />
    </div>
  )
}

export default CentreCard