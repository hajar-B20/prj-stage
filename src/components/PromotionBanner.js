import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import '@styles/PromotionBanner.css';

const pulse = keyframes `
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const StyledBanner = styled.div `
  background: linear-gradient(135deg, #f5f7fa 0%, #f8f9fa 100%);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 2px;
  right: 5px;
  background: #451a2b;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  font-weight: bold;
  transform: rotate(15deg);
  animation: ${pulse} 2s infinite;
  box-shadow: 0 2px 8px rgba(255, 71, 87, 0.4);
`;

const PromotionBanner = () => {
    const [activeCategory, setActiveCategory] = useState('Most Popular');
    const categories =[ 
        'Most Popular',
        'Birthday',
        'Sympathy',
        'Occasions',
        'Flowers',
        'Gifts & Plants'
    ];

    return (
        <StyledBanner>
            <DiscountBadge> 10% Off All Items </DiscountBadge>
            <h2 className="promo-title">Make their birthday beautiful with flowers</h2>
            <p className='promo-subtitle'>They're the best sellers for a reason, send a beautiful bouquet today.</p>
            
            <div className='categories'>
            {categories.map(category => (
                category === 'Most Popular' ? (
                <div className="category-hover-wrapper" key={category}>
                    <button 
                    className={`category-btn`}
                    >
                    {category}
                    </button>

                    <div className="dropdown-menu">
                    <div className="dropdown-column">
                        <a href="/best-sellers">All Best Sellers</a>
                        <a href="/same-day">Same Day Delivery</a>
                    </div>
                    <div className="dropdown-column">
                        <a href="/starting-at-50">Starting at $50</a>
                        <a href="/summer">Summer</a>
                    </div>
                    <div className="dropdown-column">
                        <a href="/farmers-market">Farmer's Market Inspired</a>
                        <a href="/must-have">Must-Have Bouquets</a>
                    </div>
                    </div>
                </div>
                ) : (
                <button 
                    key={category}
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
                )
            ))}
            </div>


            <div className="button-container">
                <span className='flower-icon'></span>
                <button className="shop-btn">Shop Now</button>
            </div>
            
        </StyledBanner>
    );

};

export default PromotionBanner;