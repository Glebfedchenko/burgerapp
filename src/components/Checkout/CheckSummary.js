import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../Burger/Burger';
import Button from '../Button';

const CheckSummary = ({ ingredients }) => (
  <div className="CheckoutSummary">
    <h1>
Hope it tastes well!
    </h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
    </div>
    <Button clicked btnType="Danger">
      CANCEL
    </Button>
    <Button clicked btnType="Success">
      CONTINUE
    </Button>
  </div>
);
CheckSummary.propTypes = {
  ingredients: PropTypes.object.isRequired,
};
export default CheckSummary;
