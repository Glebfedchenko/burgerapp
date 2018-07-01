import React from 'react';
import PropTypes from 'prop-types';

const Toggle = ({ clicked }) => (
  <div role="button" onClick={() => {}} onKeyPress={clicked} className="DrawerToggle">
    <div />
    <div />
    <div />
  </div>
);
Toggle.propTypes = {
  clicked: PropTypes.func.isRequired,
};
export default Toggle;
