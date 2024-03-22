import { rightprops } from '@/data'
const RightCard = ({title,content,link}:rightprops) => {
  return (
    <div className='w-full z-0 mb-6  py-4 px-1 xl:px-16 border'>
        <img className='w-full' src={link} alt="" />
        <h1 className='text-center'>{title}</h1>
        <h2>{content}</h2>
        
    </div>
  )
}

export default RightCard