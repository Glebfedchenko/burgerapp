import React from 'react'

const Backdrop = ({ show, clicked }) => {
    return (
        show ? <div onClick={clicked} className='Backdrop'></div> : null
    )
}

export default Backdrop
