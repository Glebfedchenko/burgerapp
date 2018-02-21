import React from 'react'

const Control = ({label, added, removed}) => {
    return (
        <div className='Control'>
            <div className='Label'>{label}</div>
            <button onClick={removed} className='Less'>Less</button>
            <button onClick={added} className='More'>More</button>
        </div>
    )
}

export default Control
