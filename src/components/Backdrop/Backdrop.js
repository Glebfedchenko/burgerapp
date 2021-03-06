import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ show, clicked }) => (show ? <div role="button" onKeyPress={() => {}} onClick={clicked} className="Backdrop" /> : null);
Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
