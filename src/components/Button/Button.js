import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, clicked, btnType }) => (
  <button type="button" onClick={clicked} className={btnType}>
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.any.isRequired,
  clicked: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};
export default Button;
