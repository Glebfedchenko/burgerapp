import React from 'react'
import logo from '../styles/img/burger-logo.png'
import NavigationItems from './NavigationItems'
import Backdrop from './Backdrop'
import Wrapper from '../hoc/Wrapper'
const SideBar = ({closed, open}) => {
    let properClass = ['SideDrawer', 'Close']
    if(open){
        properClass = ['SideDrawer', 'Open']
    }
    return (
        <Wrapper>
            <Backdrop show={open} clicked={closed}/>
            <div className={properClass.join(' ')} >
                <img className='Logo' src={logo} alt="" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper >
    )
}
export default SideBar