import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ingredient extends Component {
  render() {
    const { type } = this.props;
    let ingredient = null;
    switch (type) {
      case 'bottom':
        ingredient = <div className="BreadBottom" />;
        break;
      case 'top':
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className="Meat" />;
        break;
      case 'cheese':
        ingredient = <div className="Cheese" />;
        break;
      case 'salad':
        ingredient = <div className="Salad" />;
        break;
      case 'bacon':
        ingredient = <div className="Bacon" />;
        break;
      default:
        return null;
    }
    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Ingredient;
