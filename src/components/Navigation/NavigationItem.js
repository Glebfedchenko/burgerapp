import React from 'react';
import PropTypes from 'prop-types';

const NavigationItem = ({ link, active, children }) => (
  <li className="Navitem">
    <a href={link} className={active ? 'NavItem a.active' : null}>
      {children}
    </a>
  </li>
);

NavigationItem.propTypes = {
  children: PropTypes.any.isRequired,
  link: PropTypes.any.isRequired,
};
export default NavigationItem;
