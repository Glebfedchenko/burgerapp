import React from 'react';
import Ingredient from './Ingredient';

const Burger = ({ ingredients }) => {
    let transformedIngredients = Object.keys(ingredients)
        .map(igKey => {
            return [...Array(ingredients[igKey])].map((_, i) => {
                return <Ingredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
        if(transformedIngredients.length ===0){
            transformedIngredients = <p>Start adding ingredients</p>
        }
    return (
        <div className='Burger'>
            <Ingredient type='top' />
            {transformedIngredients}
            <Ingredient type='bottom' />
        </div>
    )
}
export default Burger