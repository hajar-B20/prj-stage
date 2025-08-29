import React from "react";
import '@styles/GiftSearchCard.css';

function GiftSearchCard() {
    return (
        <div className="gift-search-card">
            <h2> Find the perfect gift </h2>
            <p> Start here to narrow your search </p>

            <form className="gift-form">
                <label htmlFor="zip">Sending to</label>
                <input 
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Delivery City"
                />
                
                <label htmlFor="date">Delivery Date</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                />

                <button type="submit">SEARCH AVAILABLE GIFTS</button>

            </form>
    
        </div>
    );
}

export default GiftSearchCard;