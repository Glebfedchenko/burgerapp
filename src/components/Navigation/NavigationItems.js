import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = () => (
  <ul className="NavItems">
    <NavigationItem link="/" active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/">
Checkout
    </NavigationItem>
  </ul>
);

export default NavigationItems;
