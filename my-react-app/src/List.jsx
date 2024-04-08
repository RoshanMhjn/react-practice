import React from "react";

const List = () => {
  const fruits = [
    { id: 1, name: "apple", price: 100 },
    { id: 2, name: "orange", price: 80 },
    { id: 3, name: "mango", price: 300 },
    { id: 4, name: "grapes", price: 350 },
  ];

  /* fruits.sort((a, b) => a.name.localeCompare(b.name));

  sort by name
   */

  /* fruits.sort((a, b) => a.price - b.price);

  sort by price
   */

  /* const lowPriceFruits = fruits.filter((fruit) => fruit.price < 200); */

  /* const highPriceFruits = fruits.filter((fruit) => fruit.price > 250); */

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp; <b> {fruit.price}</b>
    </li>
  ));
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
};

export default List;
