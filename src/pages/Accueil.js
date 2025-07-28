import React from 'react';
import PromotionBanner from '@components/PromotionBanner';
import '@styles/Accueil.css';



const Accueil = () => {
  return (
    <div className="accueil-page">

      <PromotionBanner />
      
      <section className="customer-favorites">
       

      </section>
    </div>
  );
};

export default Accueil;