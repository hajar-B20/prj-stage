import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "@styles/CheckoutPage.css"; 

const CheckoutPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cartItems = state?.cartItems || [];
  const subtotal = state?.total || 0;
  const deliveryFee = 14.99;
  const totalPrice = subtotal + deliveryFee;

  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    promo: "",
    phone: "",
    message: ""
  });

  const formatPrice = (price) => price.toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleContinue = () => {
    navigate("/payment", { 
      state: { cartItems, subtotal, deliveryFee, totalPrice, deliveryInfo } 
    });
  };

  return (
    <div className="checkout-page">
      {/* Progress bar */}
      <div className="checkout-steps">
        <div className="step active">Delivery Info</div>
        <div className="step">Payment Info</div>
        <div className="step">Order Placed</div>
      </div>

      <div className="checkout-container">
        {/* LEFT SIDE - FORM */}
        <div className="checkout-form">
          <h2>Contact Information</h2>
          <input type="email" placeholder="Your Email Address" className="form-input" />

          <h2>Delivery Information</h2>
          <div className="form-row">
            <input type="text" name="firstName" placeholder="Recipient’s First Name" value={deliveryInfo.firstName} onChange={handleChange} className="form-input" />
            <input type="text" name="lastName" placeholder="Recipient’s Last Name" value={deliveryInfo.lastName} onChange={handleChange} className="form-input" />
          </div>
          <input type="text" name="address" placeholder="Delivery Address" value={deliveryInfo.address} onChange={handleChange} className="form-input" />
          <div className="form-row">
            <input type="text" name="city" placeholder="City" value={deliveryInfo.city} onChange={handleChange} className="form-input" />
            <input type="text" name="state" placeholder="State" value={deliveryInfo.state} onChange={handleChange} className="form-input" />
            <input type="text" name="promo" placeholder="Code promo" value={deliveryInfo.promo} onChange={handleChange} className="form-input" />
          </div>
          <input type="text" name="phone" placeholder="Delivery Phone Number" value={deliveryInfo.phone} onChange={handleChange} className="form-input" />

          <h2>Gift Message</h2>
          <textarea name="message" placeholder="Add a personal note (optional)" value={deliveryInfo.message} onChange={handleChange} className="form-input"></textarea>

          <button className="continue-btn" onClick={handleContinue}>
            Continue to Payment
          </button>
        </div>

        {/* RIGHT SIDE - ORDER SUMMARY */}
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item, idx) => (
            <div key={idx} className="summary-item">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)} DH</span>
            </div>
          ))}
          <div className="summary-line">
            <span>Delivery</span>
            <span>{formatPrice(deliveryFee)} DH</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>{formatPrice(totalPrice)} DH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
