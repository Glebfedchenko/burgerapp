import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from '../Ingredient';

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
    .map(igKey => [...Array(ingredients[igKey])].map((_, i) => <Ingredient key={igKey + i} type={igKey} />))
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p>
Start adding ingredients
      </p>
    );
  }
  return (
    <div className="Burger">
      <Ingredient type="top" />
      {transformedIngredients}
      <Ingredient type="bottom" />
    </div>
  );
};

Burger.propTypes = {
  ingredients: PropTypes.any.isRequired,
};
export default Burger;
