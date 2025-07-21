import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import './PromotionBanner.css';

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
  top: -10px;
  right: -10px;
  background: #ff4757;
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
                    <button 
                        key={category}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <button className="shop-btn">
                <span className='flower-icon'>🌹</span>
                SHOP BEST SELLERS
            </button>
            
        </StyledBanner>
    );

};

export default PromotionBanner;