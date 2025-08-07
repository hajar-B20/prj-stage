import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFilter, FaChevronDown, FaLeaf } from 'react-icons/fa';

import luckyLily from '@assets/BS1.jpeg';
import botanicalDream from '@assets/BS2.jpeg';
import luminousMorning from '@assets/BS3.jpeg';
import craperful from '@assets/BS4.jpeg';
import sweetAsCanBe from '@assets/BS5.jpeg';
import cleeful from '@assets/BS6.jpeg';
import sunshine from '@assets/BS7.jpeg';
import sweetheart from '@assets/BS8.jpeg';

const BestSellersPage = () => {
  const [sortOption, setSortOption] = useState('Relevance');
  const [showDropdown, setShowDropdown] = useState(false);

  const sortOptions = [
    'Relevance',
    'Lowest Price',
    'Highest Price',
    'Most Popular',
    'Newest Arrivals'
  ];

  const filterOptions = [
    'Occasion',
    'Flower Type',
    'Color',
    'Price Range',
    'Delivery Date'
  ];

  const bouquets = [
    { name: 'Lucky Lily Bouquet', price: '$55 - $95', delivery: 'SAME DAY DELIVERY', image: luckyLily },
    { name: 'Botanical Dream Bouquet', price: '$55 - $75', delivery: 'SAME DAY DELIVERY', image: botanicalDream },
    { name: 'Luminous Morning Bouquet', price: '$50 - $70', delivery: 'SAME DAY DELIVERY', image: luminousMorning },
    { name: 'Craperful Bouquet', price: '$55 - $100', delivery: 'SAME DAY DELIVERY', image: craperful },
    { name: 'Sweet As Can Be Bouquet', price: '$55 - $75', delivery: 'SAME DAY DELIVERY', image: sweetAsCanBe },
    { name: 'Cleeful Bouquet', price: '$50 - $90', delivery: 'SAME DAY DELIVERY', image: cleeful },
    { name: 'Sunshine Bouquet', price: '$50 - $150', delivery: 'SAME DAY DELIVERY', image: sunshine },
    { name: 'Sweetheart Bouquet', price: '$50 - $200', delivery: 'SAME DAY DELIVERY', image: sweetheart },
  ];

  return (
    <PageContainer>
      <Breadcrumbs>
        <Link to="/">Home</Link> / <Link to="/flowers">Flowers</Link> / All Best Sellers
      </Breadcrumbs>
      
      <Header>
        <h1>Fleurora Best Sellers</h1>
        <p>
          If there's a special occasion that needs celebrating, then Proflowers has a gift to suit the occasion. 
          Whether you want to celebrate an anniversary, birthday, new baby, new job, or holiday, our online collection 
          of gourmet food baskets, chocolate covered sweets and strawberries, specialty flower bouquets and plants 
          offers a variety of special ways to show how much you care.
        </p>
      </Header>
      
      {/* Enhanced Sort Section */}
      <EnhancedSortContainer>
        <SortHeader>
          <FaFilter className="filter-icon" />
          <span>Sort & Filter</span>
        </SortHeader>
        
        <SortOptionsContainer>
          <SortDropdown onClick={() => setShowDropdown(!showDropdown)}>
            <span>{sortOption}</span>
            <FaChevronDown className={`chevron ${showDropdown ? 'rotate' : ''}`} />
            
            {showDropdown && (
              <DropdownMenu>
                {sortOptions.map(option => (
                  <DropdownItem 
                    key={option}
                    active={sortOption === option}
                    onClick={() => {
                      setSortOption(option);
                      setShowDropdown(false);
                    }}
                  >
                    {option}
                    {sortOption === option && <FaLeaf className="leaf-icon" />}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </SortDropdown>

          <FilterTags>
            {filterOptions.map(filter => (
              <FilterTag key={filter}>
                {filter}
              </FilterTag>
            ))}
          </FilterTags>
        </SortOptionsContainer>

        <FloralDecorationLeft>✿</FloralDecorationLeft>
        <FloralDecorationRight>✿</FloralDecorationRight>
      </EnhancedSortContainer>
      
      <BouquetGrid>
        {bouquets.map((bouquet, index) => (
          <BouquetCard key={index}>
            <BouquetImage src={bouquet.image} alt={bouquet.name} />
            <BouquetName>{bouquet.name}</BouquetName>
            <BouquetPrice>{bouquet.price}</BouquetPrice>
            <DeliveryInfo>{bouquet.delivery}</DeliveryInfo>
          </BouquetCard>
        ))}
      </BouquetGrid>
    </PageContainer>
  );
};




// Styled components
const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  
  a {
    color: #451a2b;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    color: #451a2b;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

// Enhanced Sort Components
const EnhancedSortContainer = styled.div`
  position: relative;
  padding: 1.5rem;
  background: #f9f3f7;
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const SortHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #451a2b;

  .filter-icon {
    margin-right: 8px;
    font-size: 1.1rem;
  }
`;

const SortOptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
`;

const SortDropdown = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 180px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  border: 1px solid #e8e8e8;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-color: #d1a3c0;
  }

  .chevron {
    transition: transform 0.3s ease;
    font-size: 0.8rem;
    color: #451a2b;
  }

  .rotate {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 10;
  margin-top: 5px;
  overflow: hidden;
`;

const DropdownItem = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.active ? '#f9f3f7' : 'white'};
  color: ${props => props.active ? '#451a2b' : '#333'};
  font-weight: ${props => props.active ? '600' : '400'};

  &:hover {
    background: #f9f3f7;
  }

  .leaf-icon {
    color: #8bc34a;
    font-size: 0.9rem;
  }
`;

const FilterTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterTag = styled.div`
  padding: 0.5rem 1rem;
  background: white;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  border: 1px solid #e8e8e8;
  transition: all 0.2s ease;

  &:hover {
    background: #451a2b;
    color: white;
    transform: translateY(-2px);
  }
`;

const FloralDecorationLeft = styled.div`
  position: absolute;
  left: 15px;
  bottom: 10px;
  color: #d1a3c0;
  font-size: 1.5rem;
  opacity: 0.6;
`;

const FloralDecorationRight = styled.div`
  position: absolute;
  right: 15px;
  top: 10px;
  color: #d1a3c0;
  font-size: 1.5rem;
  opacity: 0.6;
  transform: rotate(180deg);
`;

const BouquetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const BouquetCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const BouquetImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
`;

const BouquetName = styled.h3`
  color: #451a2b;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const BouquetPrice = styled.p`
  color: #333;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const DeliveryInfo = styled.p`
  color: #451a2b;
  font-size: 0.8rem;
  font-weight: bold;
`;

export default BestSellersPage;