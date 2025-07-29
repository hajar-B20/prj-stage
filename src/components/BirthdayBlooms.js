import React, {useEffect} from "react";
import '@styles/BirthdayBlooms.css';
import birthdayImg from '@assets/birthdayImg.jpeg';

function BirthdayBlooms() {
  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.birthday-blooms-split, .text-content');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="birthday-blooms-split">
      <div className="image-half">
        <img 
          src={birthdayImg} 
          alt="Bouquet d'anniversaire" 
          className="bouquet-image"
        />
        <div className="image-overlay"></div>
      </div>
      <div className="text-half">
        <div className="text-content">
          <h2 data-text="birthday blooms">birthday blooms</h2>
          <p>Deliver a bouquet of happiness for their big day.</p>
          <button className="shop-button pulse">SHOP BIRTHDAY</button>
        </div>
      </div>
    </section>
  );
}

export default BirthdayBlooms;