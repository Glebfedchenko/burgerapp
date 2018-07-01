import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../styles/img/burger-logo.png';
import NavigationItems from '../Navigation';
import Backdrop from '../Backdrop';
import Wrapper from '../../hoc/Wrapper';

const SideBar = ({ closed, open }) => {
  let properClass = ['SideDrawer', 'Close'];
  if (open) {
    properClass = ['SideDrawer', 'Open'];
  }
  return (
    <Wrapper>
      <Backdrop show={open} clicked={closed} />
      <div className={properClass.join(' ')}>
        <img className="Logo" src={logo} alt="" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Wrapper>
  );
};

SideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};
export default SideBar;
