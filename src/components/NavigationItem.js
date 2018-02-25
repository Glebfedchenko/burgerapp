import React from 'react';

const NavigationItem = ( {link, active, children} ) => (
    <li className='Navitem'>
        <a 
            href={link} 
            className={active ? 'NavItem a.active' : null}>{children}</a>
    </li>
);

export default NavigationItem;