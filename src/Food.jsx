import React from 'react';

function Food() {
    const food1 = "Pizza";
    const food2 = "Burger";
    const food3 = "Salad";

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3}</li>
        </ul>
    );
}

export default Food;
