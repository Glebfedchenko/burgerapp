import React from 'react';
import PropTypes from 'prop-types';
import Control from './Control';

const BuildControls = ({
  added, removed, price, disabled, purchasable, toggle,
}) => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  return (
    <div className="BuildControls">
      <h2>
        Total price:
        {price.toFixed(2)}
      </h2>
      {controls.map(c => (
        <Control
          key={c.label}
          label={c.label}
          added={() => added(c.type)}
          removed={() => removed(c.type)}
          disabled={disabled[c.type]}
        />
      ))}
      <button type="button" className="OrderButton" disabled={!purchasable} onClick={toggle}>
        ORDER NOW
      </button>
    </div>
  );
};
BuildControls.propTypes = {
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  disabled: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  purchasable: PropTypes.bool.isRequired,
};
export default BuildControls;
