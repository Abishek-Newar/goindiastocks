"use client"
import Line from "./LeftSise/Line";
import { useState } from "react";
import Side from "./LeftSise/Side";
import { useRecoilState } from "recoil";
import { showState } from "@/data";
const Sidebar = () => {
  const [show,setShow] = useRecoilState(showState);
  return (
    <div className="flex fixed  w-screen z-10">
    <Side show={show} />
    <Line show={show} onClick={()=>{setShow(!show)}} />
    </div>
  )
}

export default Sidebar