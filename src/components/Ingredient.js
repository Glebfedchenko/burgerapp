import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Ingredient extends Component {
    render() {
        const { type } = this.props;
        let ingredient = null;
        switch (type) {
            case ('bottom'):
                ingredient = <div className='BreadBottom'></div>;
                break;
            case ('top'):
                ingredient =
                    <div className='BreadTop'>
                        <div className='Seeds1'></div>
                        <div className='Seeds2'></div>
                    </div>;
                break;
            case ('meat'):
                ingredient = <div className='Meat'></div>;
                break;
            case ('cheese'):
                ingredient = <div className='Cheese'></div>;
                break;
            case ('salad'):
                ingredient = <div className='Salad'></div>;
                break;
            case ('bacon'):
                ingredient = <div className='Bacon'></div>;
                break;
            default: null;
        }
        return ingredient;
    }
}

Ingredient.proptypes = {
    type: PropTypes.string.isRequired
}
export default Ingredient