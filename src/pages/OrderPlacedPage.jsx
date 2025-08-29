import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import "@styles/OrderPlacedPage.css";

const OrderPlacedPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, [state, navigate]);

  const {
    cartItems = [],
    subtotal = 0,
    deliveryFee = 0,
    totalPrice = 0,
    deliveryInfo = {},
    paymentMethod = "card",
  } = state || {};

  const orderId = Math.floor(Math.random() * 1000000);
  const formatPrice = (price) => price.toFixed(2);

  // 📄 Generate  Invoice
  const generatePDF = () => {
  const doc = new jsPDF();

  // Header with theme color
  doc.setFillColor(255, 230, 240); // light pink
  doc.rect(0, 0, 210, 30, "F");
  doc.setTextColor(128, 0, 64);
  doc.setFontSize(20);
  doc.text("🌸 Fleurora - Order Invoice", 14, 20);

  // Order details
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.text(`Order ID: #${orderId}`, 14, 40);
  doc.text(`Date: ${new Date().toLocaleString()}`, 14, 47);

  // Delivery Info
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 64);
  doc.text("Delivery Information:", 14, 60);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`${deliveryInfo.firstName || "N/A"} ${deliveryInfo.lastName || ""}`, 14, 68);
  doc.text(`${deliveryInfo.address || "N/A"}`, 14, 75);
  doc.text(`${deliveryInfo.city || "N/A"}, ${deliveryInfo.state || ""}`, 14, 82);

  if (deliveryInfo.promo) doc.text(`Promo: ${deliveryInfo.promo}`, 14, 89);
  if (deliveryInfo.phone) doc.text(`Phone: ${deliveryInfo.phone}`, 14, 96);
  if (deliveryInfo.email) doc.text(`Email: ${deliveryInfo.email}`, 14, 103);
  if (deliveryInfo.message)
    doc.text(`Gift Message: "${deliveryInfo.message}"`, 14, 110);

  // Payment Method
  doc.setFontSize(14);
  doc.setTextColor(128, 0, 64);
  doc.text("Payment Method:", 14, 125);
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(paymentMethod === "card" ? "💳 Credit Card" : "💻 PayPal", 14, 133);

  // Items Table
  const tableColumn = ["Bouquet", "Qty", "Price (DH)", "Total (DH)"];
  const tableRows = [];

  cartItems.forEach((item) => {
    tableRows.push([
      item.name,
      item.quantity.toString(),
      formatPrice(item.price),
      formatPrice(item.price * item.quantity),
    ]);
  });

  tableRows.push(["", "", "Subtotal", `${formatPrice(subtotal)} DH`]);
  tableRows.push(["", "", "Delivery Fee", `${formatPrice(deliveryFee)} DH`]);
  tableRows.push(["", "", "Total", `${formatPrice(totalPrice)} DH`]);

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 145,
    styles: { fontSize: 11, halign: "center" },
    headStyles: { fillColor: [255, 179, 217], textColor: 0 }, // pastel pink header
    alternateRowStyles: { fillColor: [255, 245, 250] }, // soft pink rows
    columnStyles: {
      0: { halign: "left" }, // left-align bouquet name
    },
  });

  const finalY = doc.lastAutoTable?.finalY || 145;
  doc.setFontSize(11);
  doc.setTextColor(128, 0, 64);
  doc.text("Thank you for shopping with Fleurora 🌸", 14, finalY + 20);

  doc.save(`order_${orderId}.pdf`);
};




  return (
    <div className="order-placed-page">
      {/* Progress bar */}
      <div className="checkout-steps">
        <span className="step done">Delivery Info</span>
        <span className="step done">Payment Info</span>
        <span className="step active">Order Placed</span>
      </div>

      <div className="order-container">
        {/* LEFT SIDE - Confirmation */}
        <div className="confirmation-box">
          <h1>🎉 Thank You for Your Order!</h1>
          <p>Your flowers are on their way 🌸</p>
          <p className="order-id">Order ID: #{orderId}</p>

<h2>Delivery Information</h2>
<div className="delivery-summary">
  <p>
    {deliveryInfo.firstName} {deliveryInfo.lastName}
  </p>
  <p>{deliveryInfo.address}</p>
  <p>
    {deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.promo}
  </p>
  <p>{deliveryInfo.phone}</p>
  {deliveryInfo.email && <p>{deliveryInfo.email}</p>}
  {deliveryInfo.message && <p><em>"{deliveryInfo.message}"</em></p>}
</div>


          <h2>Payment Method</h2>
          <p>{paymentMethod === "card" ? "💳 Credit Card" : "💻 PayPal"}</p>

          <div className="button-group">
            <button className="continue-btn" onClick={() => navigate("/")}>
              Continue Shopping
            </button>
            <button className="pdf-btn" onClick={generatePDF}>
              Download Invoice (PDF)
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-box">
            <div className="summary-item">
              <span>Order Subtotal</span>
              <span>{formatPrice(subtotal)} DH</span>
            </div>
            <div className="summary-item">
              <span>Delivery Fee</span>
              <span>{formatPrice(deliveryFee)} DH</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(totalPrice)} DH</span>
            </div>
          </div>

          <h3>Your Items</h3>
          {cartItems.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div>
                <p>
                  {item.name} x {item.quantity}
                </p>
                <span>{formatPrice(item.price * item.quantity)} DH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
