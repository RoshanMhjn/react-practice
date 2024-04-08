import React from "react";

const Food = () => {
  const food1 = "Mango";
  const food2 = "Banana";

  return (
    <div>
      <ul>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
        <li>Apple</li>
      </ul>
    </div>
  );
};

export default Food;
