
import { pageState } from '@/data'
import { useRecoilState } from 'recoil'

const TopNavigator = () => {
    const [pgae,setPage] = useRecoilState(pageState)
  return (
    <div className='h-10 text-white lg:hidden  flex justify-center mb-4'>
        <div onClick={()=>setPage("discussion")} className='h-full  flex items-center w-32 justify-center bg-sky-800'>Discussion</div>
        <div onClick={()=>setPage("side")} className='h-full flex items-center w-32 justify-center  bg-sky-800'>Market</div>
    </div>
  )
}

export default TopNavigator