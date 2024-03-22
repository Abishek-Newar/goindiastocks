"use client"
import Center from '@/components/Center'
import Line from '@/components/LeftSise/Line'
import RightSide from '@/components/RightSide'
import Sidebar from '@/components/Sidebar'
import { pageState } from '@/data'
import { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function Home() {

  return (
   <>
     <RecoilRoot>
      <Sidebar />
      <Center />
      <RightSide />
     </RecoilRoot>
   </>
  )
}
