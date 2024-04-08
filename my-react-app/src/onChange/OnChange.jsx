import React, { useState } from "react";

const OnChange = () => {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} />

      <p>Name: {name}</p>

      <input value={quantity} onChange={handleQuantityChange} type="number" />

      <p>Quantiy: {quantity}</p>

      <textarea
        cols="30"
        rows="10"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Provide additional instructions"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option:</option>
        <option value="VISA">VISA</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Cash on delivery">Cash on Delivery</option>
      </select>

      <p>Payment Mehtod: {payment}</p>

      <hr />

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
};

export default OnChange;
