import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "@styles/PaymentPage.css";

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const { state } = useLocation();

  const navigate = useNavigate();


  const cartItems = state?.cartItems || [];
  const subtotal = state?.subtotal || 0;
  const deliveryFee = state?.deliveryFee || 0;
  const totalPrice = state?.totalPrice || 0;
  const deliveryInfo = state?.deliveryInfo || {};

  const handleSubmit = (e) => {
  e.preventDefault();
  navigate("/order-placed", {
    state: { cartItems, subtotal, deliveryFee, totalPrice, deliveryInfo, paymentMethod },
  });
};

  return (
    <div className="payment-page">
      {/* Step indicator */}
      <div className="checkout-steps">
        <span className="step done">Delivery Info</span>
        <span className="step active">Payment Info</span>
        <span className="step">Order Placed</span>
      </div>

      <div className="payment-container">
        {/* LEFT SIDE */}
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2 className="section-title">Payment Information</h2>

          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="method"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "card" && (
            <div className="card-details">
              <input type="text" placeholder="Credit Card Number" required />
              <div className="row">
                <input type="text" placeholder="MM/YY" required />
                <input type="text" placeholder="CVV" required />
              </div>
            </div>
          )}

          <h2 className="section-title">Billing Information</h2>
          <div className="billing-info">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Billing Address" required />
            <input type="text" placeholder="City" required />
            <div className="row">
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="Code Promo" required />
            </div>
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Phone Number" required />
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="order-summary">
          <h2>Order Summary</h2>

          {/* Delivery Info Section */}
          <div className="delivery-summary">
            <h3>Delivery Information</h3>
            <p>
              {deliveryInfo.firstName} {deliveryInfo.lastName}
            </p>
            <p>{deliveryInfo.address}</p>
            <p>
              {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.promo}
            </p>
            <p>{deliveryInfo.phone}</p>
            {deliveryInfo.message && <p><em>"{deliveryInfo.message}"</em></p>}
          </div>

          <div className="summary-box">
            <div className="summary-item">
              <span>Order Subtotal</span>
              <span>{subtotal.toFixed(2)} DH</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>{deliveryFee.toFixed(2)} DH</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{totalPrice.toFixed(2)} DH</span>
            </div>
          </div>

          <h3>Your Cart</h3>
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div>
                <p>{item.name} x {item.quantity}</p>
                <span>{(item.price * item.quantity).toFixed(2)} DH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
