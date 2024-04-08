import React from "react";

const Button = () => {
  const handleClick = (e) => (e.target.textContent = "Ouch!🤧");

  return (
    <div className="button">
      <button onDoubleClick={(e) => handleClick(e)}>Click Me!💕</button>
    </div>
  );
};

export default Button;
