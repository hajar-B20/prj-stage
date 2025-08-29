import React, { useState } from 'react';
import { FaStar, FaRegStar, FaChevronDown, FaChevronUp, FaHeart, FaRegHeart, FaShare, FaTimes, FaLeaf } from 'react-icons/fa';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

import { useLocation, useNavigate } from 'react-router-dom';


import '@styles/BouquetDetail1.css';

const BouquetDetail1 = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('details');
  const [expandedDelivery, setExpandedDelivery] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);



 const defaultBouquet = {
  id: '#5956',
  title: 'LONG STEM RED ROSE BOUQUET',
  description: 'You can never go wrong with a bouquet of hand delivered long stem red roses...',
  price: 75,
  rating: 5,
  reviewCount: 45,
  recommendRate: '44 out of 46',
  image: '/placeholder-image.jpg',
  details: [
    'Approximately 24"H x 16"W',
    '12 roses and foliage',
    'Designed by florists, ready to display',
    'For long-lasting blooms, replace water daily'
  ],

  reviews: [
    { user: "Alice", date: "2025-01-01", rating: 5, title: "Beautiful", text: "Loved it!", helpful: 3 },
    { user: "Bob", date: "2025-01-02", rating: 4, title: "Nice", text: "Pretty good", helpful: 1 }
  ]
};

const bouquet = { ...defaultBouquet, ...(state?.bouquet || {}) };


    // compute the base + option price
  const deliveryOptions = bouquet.deliveryOptions || [];
  const selectedOption = deliveryOptions.find(
    opt => opt.type.toLowerCase() === selectedDelivery
  ) || { price: 0 };

  const basePrice = Number(bouquet.price) || 0;
  const optionPrice = Number(selectedOption.price) || 0;
  


  // Add to cart function with safety checks
  const addToCart = () => {
    // Ensure deliveryOptions exists and has items
    const deliveryOptions = bouquet.deliveryOptions || [];
    
    // Find the selected option with a fallback
    const selectedOption = deliveryOptions.find(
      option => option.type.toLowerCase() === selectedDelivery
    ) || deliveryOptions[0] || { type: 'Standard', price: 0, roses: 12 }; // Default fallback
    
    // Ensure prices are numbers
    const bouquetPrice = Number(bouquet.price) || 0;
    const optionPrice = Number(selectedOption.price) || 0;
    
    const item = {
      id: bouquet.id,
      name: bouquet.title,
      price: bouquetPrice + optionPrice, // Ensure this is a number
      quantity: quantity,
      image: bouquet.image || '/placeholder-image.jpg',
      delivery: {
        city: city,
        date: date,
        option: selectedOption.type
      }
    };
    
    setCartItems([item]);
    setCartOpen(true);
  };

  // Update quantity functions
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Update cart item quantity
  const updateCartItemQty = (newQuantity) => {
    if (newQuantity < 1) newQuantity = 1;
    
    if (cartItems.length > 0) {
      const updatedItems = cartItems.map(item => ({
        ...item,
        quantity: newQuantity
      }));
      setCartItems(updatedItems);
      setQuantity(newQuantity);
    }
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => 
      i < count ? <FaStar key={i} className="star-icon" /> : <FaRegStar key={i} className="star-icon" />
    );
  };

  // Helper function to safely format prices
  const formatPrice = (price) => {
    const num = Number(price);
    return isNaN(num) ? "0.00" : num.toFixed(2);
  };

  return (
    <div className="page-container">
      <div className="breadcrumbs">
        <span>Home</span> / <span>Flowers</span> / <span>Roses</span> / <span>{bouquet.title}</span>
      </div>

      <div className="product-header">
<h1>{bouquet.name || bouquet.title || ''}</h1>
        <div className="rating-container">
          <div className="stars">{renderStars(bouquet.rating)}</div>
          <span className="review-link">{bouquet.reviewCount} customer reviews</span>
          <span>|</span>
          <span className="recommend">{bouquet.recommendRate} recommend</span>
        </div>
      </div>

      <div className="product-container">
        <div className="gallery-section">
          <img src={bouquet.image || '/placeholder-image.jpg'} alt={bouquet.title} className="main-image" />
        </div>

        <div className="details-section">
          <div className="price-container">
          <span className="current-price">{formatPrice(basePrice + optionPrice)}DH</span>            <span className="delivery-badge">SAME DAY DELIVERY</span>
          </div>

          <p className="description">{bouquet.description}</p>

          <div className="delivery-options">
            <div className="delivery-header" onClick={() => setExpandedDelivery(!expandedDelivery)}>
              <h3>DELIVERY INFORMATION</h3>
              {expandedDelivery ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            
            {expandedDelivery && (
              <div className="delivery-content">
                <p>This item will be delivered by a local florist. Delivery charges start at $14.99.</p>
                <div className="guarantee">7-day fresh flower guarantee</div>
                
                <div className="option-grid">
                  {(bouquet.deliveryOptions || []).map((option) => (
                    <div 
                      key={option.type}
                      className={`option-card ${selectedDelivery === option.type.toLowerCase() ? 'selected' : ''}`}
                      onClick={() => setSelectedDelivery(option.type.toLowerCase())}
                    >
                      <div className="option-title">{option.type}</div>
                      <div className="option-price">
                        {option.price > 0 ? `+$${formatPrice(option.price)}` : 'Included'}
                      </div>
                      <div className="option-detail">{option.roses} roses</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="delivery-form"> 
            <div className="form-group">
              <label className="form-label"><FiMapPin /> Delivery City</label>
              <input 
                type="text" 
                placeholder="Enter city" 
                className="form-input" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
              />
            </div>
            
            <div className="form-group">
              <label className="form-label"><FiCalendar /> Delivery Date</label>
              <input 
                type="date" 
                placeholder="MM/DD/YYYY" 
                className="form-input" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
              />
              <div className="same-day-note">Order within 2 hours for same-day delivery</div>
            </div>
          </div>

          <div className="action-buttons">
            <div className="quantity-selector">
              <button className="qty-button" onClick={decreaseQty}>-</button>
              <div className="qty-display">{quantity}</div>
              <button className="qty-button" onClick={increaseQty}>+</button>
            </div>
            
            <button 
              className="add-to-cart" 
              onClick={addToCart} 
              disabled={!city || !date}   
            >
              ADD TO CART
            </button>
            
            <button className="icon-button" onClick={() => setIsFavorite(!isFavorite)}>
              {isFavorite ? <FaHeart className="heart-icon-filled" /> : <FaRegHeart className="heart-icon" />}
            </button>
            
            <button className="icon-button">
              <FaShare className="share-icon" />
            </button>
          </div>

          <div className="item-number">ITEM: {bouquet.id}</div>
        </div>
      </div>

      {/* Enhanced Cart Drawer with Floral Theme */}
      <div className={`cart-drawer ${cartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2 className="cart-title">
            <FaLeaf className="leaf-icon" /> Your Floral Cart
          </h2>
          <button className="close-cart-btn" onClick={() => setCartOpen(false)}>
            <FaTimes />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart-state">
            <div className="empty-cart-icon">🌸</div>
            <p className="empty-cart-message">Your cart is looking a little bare...</p>
            <p className="empty-cart-subtext">Add some beautiful blooms to brighten it up!</p>
            <button className="continue-shopping-btn" onClick={() => setCartOpen(false)}>
              Continue Browsing
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <div className="cart-item-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="cart-item-image"
                    />
                    <div className="floral-badge">{item.delivery.option}</div>
                  </div>
                  
                  <div className="cart-item-details">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-price">{formatPrice(item.price)} DH</p>
                    
                    <div className="delivery-info-card">
                      <div className="info-row">
                        <FiMapPin className="info-icon" />
                        <span>Delivery to: {city}</span>
                      </div>
                      <div className="info-row">
                        <FiCalendar className="info-icon" />
                        <span>Delivery date: {date}</span>
                      </div>
                    </div>
                    
                    <div className="quantity-section">
                      <p className="quantity-label">Quantity:</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateCartItemQty(item.quantity - 1)}>-</button>
                        <span className="quantity-number">{item.quantity}</span>
                        <button onClick={() => updateCartItemQty(item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    
                    <p className="item-subtotal">
                      Subtotal: <span>{formatPrice(item.price * item.quantity)} DH</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>{formatPrice(cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0))} DH</span>
              </div>
              <div className="summary-line">
                <span>Delivery</span>
                <span className="free-delivery">FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>{formatPrice(cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * item.quantity, 0))} DH</span>
              </div>
              
              <button 
                className="checkout-btn"
                onClick={() => navigate("/checkout", { state: { cartItems, total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) } })}
              >
                Checkout
              </button>
              
              <button className="continue-shopping-btn" onClick={() => setCartOpen(false)}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>

      {/* Overlay when cart is open */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>}

      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'details' ? 'active' : ''}`} 
          onClick={() => setActiveTab('details')}
        >
          DETAILS
        </div>
        <div 
          className={`tab ${activeTab === 'reviews' ? 'active' : ''}`} 
          onClick={() => setActiveTab('reviews')}
        >
          RATINGS & REVIEWS
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'details' ? (
          <div className="details-content">
            <h3>DETAILS</h3>
            <ul>
              {(bouquet.details || []).map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            
            <h3>CARE INSTRUCTIONS</h3>
            <p>For long-lasting blooms, replace the water daily. We suggest trimming the stems every couple days.</p>
          </div>
        ) : (
          <div className="reviews-content">
            <div className="review-summary">
            <h3>{Number(bouquet.rating ?? 0).toFixed(1)} out of 5</h3>
              <div className="stars-large">{renderStars(bouquet.rating)}</div>
              <div className="total-reviews">{bouquet.reviewCount} global ratings</div>
              
              <div className="sort-select">
                <label>Sort By:</label>
                <select>
                  <option>Date - Newest First</option>
                  <option>Highest Rating</option>
                  <option>Lowest Rating</option>
                </select>
              </div>
            </div>
            
            <div className="review-list">
              {(bouquet.reviews || []).map((review, i) => (
                <div className="review-item" key={i}>
                  <div className="review-header">
                    <div className="reviewer">{review.user}</div>
                    <div className="review-date">{review.date}</div>
                    <div className="review-stars">{renderStars(review.rating)}</div>
                  </div>
                  
                  <div className="review-title">{review.title}</div>
                  <p className="review-text">{review.text}</p>
                  
                  <div className="review-helpful">
                    <span>Was this review helpful?</span>
                    <button className="helpful-button">Yes</button>
                    <button className="helpful-button">No</button>
                    <span className="helpful-count">{review.helpful} people found this helpful</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BouquetDetail1;