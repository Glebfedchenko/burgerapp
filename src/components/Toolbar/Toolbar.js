import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../styles/img/burger-logo.png';
import NavigationItems from '../Navigation';
import Toggle from '../Toggle';

const Toolbar = ({ toggleClicked }) => (
  <header className="Toolbar">
    <Toggle clicked={toggleClicked} />
    <div className="Logo">
      <img src={logo} alt="" />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);
Toolbar.propTypes = {
  toggleClicked: PropTypes.func.isRequired,
};
export default Toolbar;
