import React,  {useState, useEffect} from 'react';
import './App.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Accueil from '@pages/Accueil';
import SearchSection from '@components/SearchSection';
import GiftSearchCard from '@components/GiftSearchCard';
import PopularBouquets from '@components/PopularBouquets';
import BirthdayBlooms from '@components/BirthdayBlooms';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);


  return (
    <div className = {`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header />

        <div className="center-toggle">
          <button onClick={() => setShowSearch(!showSearch)} className='search-toggle-btn'>
            {showSearch ? 'Return' : '🔍 Search Category'}
          </button>
        </div>

      {showSearch && <SearchSection darkMode={darkMode} setDarkMode={setDarkMode} /> }
      
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