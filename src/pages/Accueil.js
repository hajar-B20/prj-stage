import React from 'react';
import PromotionBanner from '@components/PromotionBanner';
import '@styles/Accueil.css';

const Accueil = () => {
  return (
    <div className="accueil-page">
      <PromotionBanner />
      
      {/* Autres sections de votre page d'accueil */}
      <section className="customer-favorites">
        <h2>Shop our customer favorites</h2>
        {/* Contenu supplémentaire */}
      </section>
    </div>
  );
};

export default Accueil;