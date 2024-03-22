import React, { ReactElement } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart ,CiShare2} from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { IconType } from "react-icons";
const Icon = () => {
  return (
    <div className='flex justify-between'>
        <Icons Icon={<CiHeart className='text-xl' />} datas="2k" />
        <Icons Icon={<IoEyeOutline />} datas="2k" />
        <Icons Icon={<FaRegMessage />} datas="2k Comments" />
        <Icons Icon={<CiShare2 />} datas="Share" />
    </div>
  )
}
interface iconsprops{
    Icon: ReactElement,
    datas: string
}
function Icons ({Icon,datas}:iconsprops){
    return <div className='flex gap-2 items-center'>
        {Icon}
        <h1 className='font-semibold'>{datas}</h1>
    </div>
}

export default Icon