import { sidebar_data } from "@/data";
import { FaBell } from "react-icons/fa";
interface dataprops{
    show: boolean
}
const Side = ({show}:dataprops) => {
  return (
    <div className={` w-full ${show?"block z-20": "hidden"} `}>
        <aside className="h-screen border   bg-sky-900">
        <div className="flex items-center justify-between p-6 lg:px-4">
            <div className="flex gap-4 items-center">
            <img className=" size-8 lg:size-16 " src="https://docs.google.com/thumbnail?id=1JI01uG2pkR_HcFIgCkkosGRfnYY3YNML" alt="" />
            <h1 className="text-sm lg:text-xl text-white">Hello, User</h1>
            </div>
            <FaBell />
        </div>
        <hr />
        {
          sidebar_data.map((item,index)=>(
            <div key={index}  className={`p-6 text-white ${index === 0? "bg-sky-950": null} `}>
              {item}
            </div>
          ))
        }
    </aside>
    </div>
  )
}

export default Side