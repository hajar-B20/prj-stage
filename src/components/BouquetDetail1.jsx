import React, { useState } from 'react';
import { FaStar, FaRegStar, FaChevronDown, FaChevronUp, FaHeart, FaRegHeart, FaShare } from 'react-icons/fa';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import '@styles/BouquetDetail1.css';

const BouquetDetail1 = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [expandedDelivery, setExpandedDelivery] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');

  // Sample data
  const bouquet = {
    id: '#5956',
    title: 'LONG STEM RED ROSE BOUQUET',
    description: 'You can never go wrong with a bouquet of hand delivered long stem red roses from a local florist...',
    price: 75,
    rating: 5,
    reviewCount: 45,
    recommendRate: '44 out of 46',
    details: [
      'Approximately 24"H x 16"W',
      '12 roses and foliage',
      'Designed by florists, ready to display',
      'For long-lasting blooms, replace water daily'
    ],
    deliveryOptions: [
      { type: 'Standard', price: 0, roses: 12 },
      { type: 'Deluxe', price: 15, roses: 18 },
      { type: 'Premium', price: 34, roses: 24 }
    ],
    reviews: [
      {
        user: 'MysticFlowerLight',
        date: 'Feb 5, 2023',
        rating: 5,
        title: 'Joy in a bouquet of roses',
        text: 'Your lovely long-stemmed red roses brought boundless love to my mother...',
        helpful: 8
      },
      {
        user: 'FreezingDelivery',
        date: 'Jan 15, 2023',
        rating: 3,
        title: 'Beautiful but cold delivery',
        text: 'Flowers beautiful but delivered in cold freezing weather...',
        helpful: 2
      }
    ]
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => 
      i < count ? <FaStar key={i} className="star-icon" /> : <FaRegStar key={i} className="star-icon" />
    );
  };

  return (
    <div className="page-container">
      <div className="breadcrumbs">
        <span>Home</span> / <span>Flowers</span> / <span>Roses</span> / <span>{bouquet.title}</span>
      </div>

      <div className="product-header">
        <h1>{bouquet.title}</h1>
        <div className="rating-container">
          <div className="stars">{renderStars(bouquet.rating)}</div>
          <span className="review-link">{bouquet.reviewCount} customer reviews</span>
          <span>|</span>
          <span className="recommend">{bouquet.recommendRate} recommend</span>
        </div>
      </div>

      <div className="product-container">
        <div className="gallery-section">
          <img src="/red-rose-bouquet.jpg" alt={bouquet.title} className="main-image" />
          <div className="thumbnail-container">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`/red-rose-thumb-${i}.jpg`} alt={`Thumbnail ${i}`} className="thumbnail" />
            ))}
          </div>
        </div>

        <div className="details-section">
          <div className="price-container">
            <span className="current-price">${bouquet.price}</span>
            <span className="delivery-badge">SAME DAY DELIVERY</span>
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
                  {bouquet.deliveryOptions.map((option) => (
                    <div 
                      key={option.type}
                      className={`option-card ${selectedDelivery === option.type.toLowerCase() ? 'selected' : ''}`}
                      onClick={() => setSelectedDelivery(option.type.toLowerCase())}
                    >
                      <div className="option-title">{option.type}</div>
                      <div className="option-price">
                        {option.price > 0 ? `+$${option.price}` : 'Included'}
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
              <label className="form-label"><FiMapPin /> Delivery Zip Code</label>
              <input type="text" placeholder="Enter zip code" className="form-input" />
            </div>
            
            <div className="form-group">
              <label className="form-label"><FiCalendar /> Delivery Date</label>
              <input type="text" placeholder="MM/DD/YYYY" className="form-input" />
              <div className="same-day-note">Order within 2 hours for same-day delivery</div>
            </div>
          </div>

          <div className="action-buttons">
            <div className="quantity-selector">
              <button className="qty-button" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <div className="qty-display">{quantity}</div>
              <button className="qty-button" onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            
            <button className="add-to-cart">ADD TO CART</button>
            
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
              {bouquet.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            
            <h3>CARE INSTRUCTIONS</h3>
            <p>For long-lasting blooms, replace the water daily. We suggest trimming the stems every couple days.</p>
          </div>
        ) : (
          <div className="reviews-content">
            <div className="review-summary">
              <h3>{bouquet.rating.toFixed(1)} out of 5</h3>
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
              {bouquet.reviews.map((review, i) => (
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