import React, { useRef } from "react";
import { Link } from "react-router-dom"; 

import '@styles/PopularBouquets.css';
import bouquet1 from '@assets/bouquet1.jpeg';
import bouquet2 from '@assets/bouquet2.jpeg';
import bouquet3 from '@assets/bouquet3.jpeg';
import bouquet4 from '@assets/bouquet4.jpeg';
import bouquet5 from '@assets/bouquet5.jpeg';
import bouquet6 from '@assets/bouquet6.jpeg';
import bouquet7 from '@assets/bouquet7.jpeg';

const bouquets = [
  { name: "ANA M3AK Bouquet", price: "100DH - 150DH", delivery: "SAME DAY DELIVERY", image: bouquet1 },
  { name: "Smile my sweetheart Bouquet", price: "200DH - 250DH", delivery: "SAME DAY DELIVERY", image: bouquet2 },
  { name: "Everything will be OK Bouquet", price: "100DH - 2000DH", delivery: "SAME DAY DELIVERY", image: bouquet3 },
  { name: "Kanbghik Bouquet", price: "200DH - 300DH", delivery: "SAME DAY DELIVERY", image: bouquet4 },
  { name: "Mabrouk lah ikml blkhir Bouquet", price: "150DH - 250DH", delivery: "SAME DAY DELIVERY", image: bouquet5 },
  { name: "TO MY LOVE Bouquet", price: "350DH - 400DH", delivery: "SAME DAY DELIVERY", image: bouquet6 },
  { name: "RBI IHFDK LIYA", price: "150DH - 250DH", delivery: "SAME DAY DELIVERY", image: bouquet7 }
];

export default function PopularBouquets() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="bouquet-section">
      <h2 className="section-title">Our Most Popular Bouquets</h2>

      <div className="scroll-container">
        <button className="scroll-button left" onClick={scrollLeft}>←</button>

        <div className="bouquet-grid-horizontal" ref={scrollRef}>
          {bouquets.map((b, i) => (
            <div className="bouquet-card" key={i}>
              <img src={b.image} alt={b.name} className="bouquet-img" />
              <h3>{b.name}</h3>
              <p className="price">{b.price}</p>
              <p className="delivery">{b.delivery}</p>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>→</button>
      </div>

      <button className="cta-button">Shop Best Sellers</button>
    </section>
  );
}
