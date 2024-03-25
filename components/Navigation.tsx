import React from 'react'
import { RecoilRoot } from 'recoil'
import TopNavigator from './TopNavigator'
import SidebarContainer from './LeftSideBar/SIdebarContainer'
import CentreContainer from './Center/CentreContainer'
import RightSideContainer from './RightSide/RightSideContainer'

const Navigation = () => {
  return (
    <>
    <RecoilRoot>
        <TopNavigator />
        <SidebarContainer />
        <CentreContainer />
        <RightSideContainer />
    </RecoilRoot>
    </>
  )
}

export default Navigation