import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Guest");

  const [age, setAge] = useState(0);

  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Jack");
    console.log(name);
  };

  const increaseAge = () => {
    setAge(age + 1);
  };

  const toggleEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div className="my-component">
      <p>Name: {name}</p>
      <button onClick={updateName}>Update Name</button>
      <p>Name: {age}</p>
      <button onClick={increaseAge}>Add Age</button>

      <p>is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployed}>Toggle</button>
    </div>
  );
};

export default MyComponent;
