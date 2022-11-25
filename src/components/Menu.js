import React from 'react'
import Menus from './Partials/Menus' 
import {ComidasMenuProvider} from './Partials/Context'

function Menu() {


  return (
    

    <ComidasMenuProvider>
    <Menus/>
    </ComidasMenuProvider>
  )
}

export default Menu