import React from 'react'
import Wrapper from '../hoc/Wrapper'
import Backdrop from './Backdrop'

const Modal = ({ children, show, modalClosed }) => {
    return (
        <Wrapper>
            <Backdrop show={show} clicked={modalClosed} />
            <div className={show ? 'Modal' : 'ModalActive'}>
                {children}
            </div>
        </Wrapper>
    )
}

export default Modal
