import React from 'react'

const Control = ({label, added, removed,disabled}) => {
    return (
        <div className='Control'>
            <div className='Label'>{label}</div>
            <button onClick={removed} disabled={disabled} className='Less'>Less</button>
            <button onClick={added} className='More'>More</button>
        </div>
    )
}

export default Control
