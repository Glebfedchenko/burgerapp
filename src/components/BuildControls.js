import React from 'react';
import Control from './Control';


const BuildControls = ({ added, removed, price, disabled, purchasable, toggle}) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' }
    ]

    return (
        <div className='BuildControls'>
            <h2>Total price: {price.toFixed(2)}</h2>
            {controls.map(c =>
                <Control
                    key={c.label}
                    label={c.label}
                    added={() => added(c.type)}
                    removed={() => removed(c.type)}
                    disabled={disabled[c.type]}
                />)}
            <button
                className='OrderButton'
                disabled={!purchasable}
                onClick={toggle}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
