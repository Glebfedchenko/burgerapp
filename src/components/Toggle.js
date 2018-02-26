import React from 'react'

const Toggle = ({clicked}) =>{
    return(
        <div onClick={clicked} className='DrawerToggle'>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Toggle