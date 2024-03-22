
import { center_data, pageState, showState } from '@/data'
import { useRecoilState } from 'recoil'
import CentreCard from './Center/CentreCard'
const Center = () => {
  const [show,setShow] = useRecoilState(showState)
  const [page,setPage] = useRecoilState(pageState);
  return (
    
    <div className={` w-full lg:static  bg-white ${page === "discussion"? "static" : "hidden"} ${show? "lg:w-[50%] mx-auto"  : "lg:w-[74%] lg:ml-10 "}`}>
      <h1 className=' text-2xl border px-3 py-1 mb-6 border-red-500 text-red-500 ml-10 bg-slate-200 font-bold w-72'> DISCUSSION FORUM</h1>
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