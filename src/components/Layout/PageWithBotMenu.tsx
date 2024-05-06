import React from 'react'
import { Page } from 'zmp-ui'
import BottomMenu from './BottomMenu'

const PageWithBotMenu = ({children}) => {
  return (
    <Page>
        {children}
        <BottomMenu/>
    </Page>
  )
}

export default PageWithBotMenu