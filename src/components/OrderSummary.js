import React from 'react'
import Wrapper from '../hoc/Wrapper'
const OrderSummary = ({ ingredients,canceled,continued, price }) => {
    const ingredientsSummary = Object.keys(ingredients)
        .map(igKey =><li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}</span>:{ingredients[igKey]}</li>)
    return (
        <Wrapper>
            <h3>Your Order</h3>
            <p>A burger with the following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <button className='Success' onClick={canceled} >CANCEL</button>
            <button className='Danger' onClick={continued}>CONTINUE</button>
        </Wrapper>
    )
}
export default OrderSummary