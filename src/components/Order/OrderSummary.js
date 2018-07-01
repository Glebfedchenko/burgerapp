import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../hoc/Wrapper';

const OrderSummary = ({
  ingredients, canceled, continued, price,
}) => {
  const ingredientsSummary = Object.keys(ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>
        {igKey}
      </span>
      :
      {ingredients[igKey]}
    </li>
  ));
  return (
    <Wrapper>
      <h3>
Your Order
      </h3>
      <p>
A burger with the following ingredients
      </p>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>
        <strong>
          Total Price:
          {price.toFixed(2)}
        </strong>
      </p>
      <p>
Continue to Checkout?
      </p>
      <button type="button" className="Success" onClick={canceled}>
        CANCEL
      </button>
      <button type="button" className="Danger" onClick={continued}>
        CONTINUE
      </button>
    </Wrapper>
  );
};
OrderSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
  canceled: PropTypes.func.isRequired,
  continued: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};
export default OrderSummary;
