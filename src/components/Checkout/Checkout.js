import React from 'react';
import CheckSummary from './CheckSummary';

const ingredients = {
  salad: 1,
  meat: 1,
  bacon: 1,
  cheese: 1,
};
const Checkout = () => (
  <div className="go">
    <CheckSummary ingredients={ingredients} />
  </div>
);
export default Checkout;
