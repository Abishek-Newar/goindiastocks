
import { showState } from "@/data";
import { useRecoilState } from "recoil";
import Line from "./LeftSise/Line";
import Side from "./LeftSise/Side";
const Sidebar = () => {
  const [show,setShow] = useRecoilState(showState);
  return (
    <div className={`fixed    top-0 ${show? "z-30 w-[55%] lg:w-[22%]": "z-10 w-6"}`}>
      <div className="flex">
      <Side show={show} />
    <Line show={show} onClick={()=>{setShow(!show)}}/>
      </div>
    </div>
  )
}

export default Sidebar