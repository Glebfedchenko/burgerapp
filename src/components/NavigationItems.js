import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = () => (
    <ul className='NavItems'>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavigationItems;