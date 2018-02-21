import React, { Component } from 'react'
import Wrapper from '../hoc/Wrapper'
import Burger from './Burger'
import BuildControls from './BuildControls'

const PRICES = {
    salad: 0.5,
    cheese: 0.3,
    meat: 1.2,
    bacon: 1.1
}
export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 0

    }
    addIngredient = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount;
        const addPrice = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + addPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }
    removeIngredient = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updatedCount;
        const deductPrice = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - deductPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }
    render() {
        const { disabled } = this.state.ingredients
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        return (
            <Wrapper>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    added={this.addIngredient}
                    removed={this.removeIngredient}
                    price={this.state.totalPrice}
                />
            </Wrapper>
        )
    }
}
