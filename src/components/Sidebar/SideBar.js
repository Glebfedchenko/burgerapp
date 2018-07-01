import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../styles/img/burger-logo.png';
import NavigationItems from '../Navigation';
import Backdrop from '../Backdrop';
import Wrapper from '../Wrapper';

const SideBar = ({ closed, open }) => (
  <Wrapper>
    <Backdrop show={open} clicked={closed} />
    <div className={open ? 'SideDrawer Open' : 'SideDrawer Close'}>
      <img className="Logo" src={logo} alt="" />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </Wrapper>
);

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};
export default SideBar;
