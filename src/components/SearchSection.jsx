import React, {useState} from "react";
import '@styles/SearchSection.css';

const categories = ["Roses", "Orchids", "Daisies", "Sunflowers", "Birthday", "Get Well", "Anniversary"];
const colors = [
    {name: "Red", class: "red"}, 
    {name: "Yellow", class: "yellow"}, 
    { name: "Purple", class: "purple" },
    { name: "White", class: "white" },
    { name: "Orange", class: "orange" },
    { name: "Blue", class: "blue" },
    { name: "Pink", class: "pink" },
    { name: "Multi", class: "multi" }
];

export default function SearchSection({ darkMode, setDarkMode }) {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        const filtered = categories.filter(cat => 
            cat.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(value ? filtered : []);
    };


return (
    <div className={`search-container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="theme-toggle">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

        <div className="search-container">
        <h2 className="section-title">Find the perfect flowers</h2>
        <div className="search-box">
            <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search by color, flower, occasion"
            className="search-input"
            />
            {suggestions.length > 0 && (
            <ul className="suggestions">
                {suggestions.map((s, idx) => (
                <li key={idx} className="suggestion-item">{s}</li>
                ))}
            </ul>
            )}
        </div>

        <div className="search-grid">
            <div>
            <h3 className="grid-title">Popular Searches</h3>
            <ul>
                {categories.slice(0, 4).map((item, idx) => (
                <li key={idx} className="grid-item">{item}</li>
                ))}
            </ul>
            </div>
            <div>
            <h3 className="grid-title">&nbsp;</h3>
            <ul>
                {categories.slice(4).map((item, idx) => (
                <li key={idx} className="grid-item">{item}</li>
                ))}
            </ul>
            </div>
            <div className="color-section">
            <h3 className="grid-title">Products by Color</h3>
            <div className="color-list">
                {colors.map((color, idx) => (
                <div key={idx} className="color-item">
                    <span className={`color-circle ${color.class}`} />
                    <span>{color.name}</span>
                </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    </div>
 );
}