import React from 'react'
import logo from '../styles/img/burger-logo.png'
import NavigationItems from './NavigationItems'
import Toggle from './Toggle'

const Toolbar = ({toggleClicked}) =>
    <header className='Toolbar'>
        <Toggle clicked={toggleClicked}/>
        <div className='Logo'>
            <img src={logo} alt="" />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
export default Toolbar