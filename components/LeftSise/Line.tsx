import React, { MouseEventHandler } from 'react'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
interface dataprops{
    show: boolean,
    onClick: MouseEventHandler
}
const Line = ({show,onClick}:dataprops) => {
  return (
    <div className=''>
        <div className='w-5 h-screen flex items-center bg-slate-300 '>
            <div onClick={onClick} className='w-full h-20 text-white cursor-pointer flex items-center justify-center bg-sky-900'>
                {
                  show?
                  <FaCaretLeft className='h-8'  />
                  :
                  <FaCaretRight className='h-8' />
                }
            </div>
        </div>
    </div>
  )
}

export default Line