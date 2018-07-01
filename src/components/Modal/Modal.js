import React from 'react';
import PropTypes from 'prop-types';
import { lifecycle } from 'recompose';
import Wrapper from '../Wrapper';
import Backdrop from '../Backdrop';

const Modal = ({ children, show, modalClosed }) => (
  <Wrapper>
    <Backdrop show={show} clicked={modalClosed} />
    <div className={show ? 'Modal' : 'ModalActive'}>
      {children}
    </div>
  </Wrapper>
);

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalClosed: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default lifecycle({
  shouldComponentUpdate(nextProps) {
    return nextProps.show !== this.props.show;
  },
})(Modal);
