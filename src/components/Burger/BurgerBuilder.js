import React, { Component } from 'react';
import Wrapper from '../../hoc/Wrapper';
import Burger from './Burger';
import BuildControls from '../BuildControls';
import Modal from '../Modal';
import OrderSummary from '../Order';

const PRICES = {
  salad: 0.5,
  cheese: 0.3,
  meat: 1.2,
  bacon: 1.1,
};
export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 3,
    purchasable: false,
    active: false,
  };

  updatePurchase = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map(igKey => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const addPrice = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + addPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const deductPrice = PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - deductPrice;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchase(updatedIngredients);
  };

  toggle = () => {
    this.setState({ active: true });
  };

  cancelPurchase = () => {
    this.setState({ active: false });
  };

  continuePurchase = () => {
    alert(yo);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Wrapper>
        <Modal show={this.state.active} modalClosed={this.cancelPurchase}>
          <OrderSummary
            ingredients={this.state.ingredients}
            canceled={this.cancelPurchase}
            continued={this.continuePurchase}
            price={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          added={this.addIngredient}
          removed={this.removeIngredient}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          disabled={disabledInfo}
          toggle={this.toggle}
        />
      </Wrapper>
    );
  }
}
