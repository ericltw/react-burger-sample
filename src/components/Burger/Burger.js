import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformIngredients = [];

    for (let igKey in props.ingredients) {
        for (let i = 0; i < props.ingredients[igKey]; i++) {
            transformIngredients.push(
                <BurgerIngredient key={igKey + i} type={igKey} />
            );
        }
    }

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredient!</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;