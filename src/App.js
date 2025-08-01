import React, { useState, useEffect } from 'react';
import './App.css';
import EventBanner from '@components/EventBanner';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Accueil from '@pages/Accueil';
import SearchSection from '@components/SearchSection';
import GiftSearchCard from '@components/GiftSearchCard';
import PopularBouquets from '@components/PopularBouquets';
import BirthdayBlooms from '@components/BirthdayBlooms';

function App() {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, []);

  return (
    <div className="App">
      <EventBanner />
      <Header onSearchClick={() => setShowSearch(!showSearch)} />

      {showSearch && <SearchSection />}

      <main>
        <GiftSearchCard />
        <Accueil />
        <BirthdayBlooms />
        <PopularBouquets />
        <Footer />
      </main>
    </div>
  );
}

export default App;
