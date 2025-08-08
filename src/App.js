import React, { useState, useEffect } from 'react'; 
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import EventBanner from '@components/EventBanner';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Accueil from '@pages/Accueil';
import SearchSection from '@components/SearchSection';
import GiftSearchCard from '@components/GiftSearchCard';
import PopularBouquets from '@components/PopularBouquets';
import BirthdayBlooms from '@components/BirthdayBlooms';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import BestSellers from '@pages/BestSellers';
import BouquetDetail1 from '@components/BouquetDetail1';

function App() {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isSearchPage = location.pathname === '/search';

  return (
    <div className="App">
      {/* Only show these if NOT on the search page */}
      {!isSearchPage && <EventBanner />}
      {!isSearchPage && <Header onSearchClick={() => setShowSearch(!showSearch)} />}
      {!isSearchPage && showSearch && <SearchSection />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GiftSearchCard />
                <Accueil />
                <BirthdayBlooms />
                <PopularBouquets />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchSection />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/bouquets/:id" element={<BouquetDetail1 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

