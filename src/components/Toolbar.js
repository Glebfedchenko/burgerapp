import React from 'react'
import logo from '../styles/img/burger-logo.png'
import NavigationItems from './NavigationItems'

const Toolbar = ()=>
<header className='Toolbar'>
    <div>MENU</div>
    <img className='Logo' src={logo} alt=""/>
    <nav>
        <NavigationItems/>
    </nav>
</header>
export default Toolbar