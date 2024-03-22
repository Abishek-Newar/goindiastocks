"use client"
import Center from '@/components/Center'
import RightSide from '@/components/RightSide'
import Sidebar from '@/components/Sidebar'
import TopNavigator from '@/components/TopNavigator'
import {
  RecoilRoot
} from 'recoil'

export default function Home() {

  return (
   <>
     <RecoilRoot>
      <TopNavigator />
      <Sidebar />
      <Center />
      <RightSide />
     </RecoilRoot>
   </>
  )
}
