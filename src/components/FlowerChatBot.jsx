import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@styles/FlowerChatBot.css";

const faq = [
  { q: "What flowers are best for birthdays?", a: "Bright lilies, sunflowers, and mixed bouquets bring joy to any birthday celebration.", keywords: ["birthday", "celebration"] },
  { q: "Do roses last longer than tulips?", a: "Roses generally last longer if kept in fresh water and trimmed daily, tulips tend to wilt faster.", keywords: ["roses", "tulips", "last longer"] },
  { q: "What flowers are perfect for weddings?", a: "Peonies, garden roses, and orchids are elegant picks for wedding arrangements.", keywords: ["wedding", "marriage", "bride"] },
  { q: "How can I make flowers last longer?", a: "Change water daily, trim stems diagonally, and keep them away from direct sunlight or heat.", keywords: ["care", "fresh", "last longer"] },
  { q: "What flowers are best for anniversaries?", a: "Roses, carnations, and orchids symbolize enduring love and are perfect for anniversaries.", keywords: ["anniversary", "love"] },
  { q: "Are sunflowers good for gifts?", a: "Yes, sunflowers symbolize happiness and make cheerful gifts.", keywords: ["sunflower", "gift"] },
  { q: "Which flowers are best for condolences?", a: "Lilies, white roses, and chrysanthemums convey sympathy and respect.", keywords: ["condolence", "funeral", "sympathy"] },
  { q: "What flowers bloom in winter?", a: "Camellias, amaryllis, and poinsettias bloom beautifully in winter.", keywords: ["winter", "cold", "seasonal"] },
  { q: "Can I grow roses indoors?", a: "Yes, miniature roses can thrive indoors with proper sunlight and care.", keywords: ["roses", "indoor", "grow"] },
  { q: "What flowers are low maintenance?", a: "Succulents, zinnias, and marigolds are hardy and low maintenance.", keywords: ["low maintenance", "easy", "beginner"] },
  { q: "What flowers attract butterflies?", a: "Lavender, zinnias, and coneflowers are great at attracting butterflies.", keywords: ["butterfly", "garden", "pollinator"] },
  { q: "Which flowers have the strongest fragrance?", a: "Jasmine, gardenia, and lilies are known for their powerful fragrance.", keywords: ["fragrance", "smell", "aroma"] },
  { q: "Are orchids hard to care for?", a: "Orchids need indirect light and weekly watering but are not as difficult as people think.", keywords: ["orchid", "care"] },
  { q: "What flowers symbolize friendship?", a: "Yellow roses, alstroemeria, and sunflowers symbolize friendship and joy.", keywords: ["friendship", "symbolize"] },
  { q: "Which flowers are best for Valentine's Day?", a: "Roses, tulips, and carnations are timeless for Valentine's gifts.", keywords: ["valentine", "love", "romantic"] },
  { q: "Can flowers be dyed different colors?", a: "Yes, white flowers like carnations can absorb dye through their stems.", keywords: ["dyed", "color", "carnations"] },
  { q: "What flowers are hypoallergenic?", a: "Orchids, roses, and peonies produce less pollen and are allergy friendly.", keywords: ["hypoallergenic", "allergy"] },
  { q: "What flowers are perfect for graduation?", a: "Gerbera daisies, roses, and mixed bouquets make vibrant graduation gifts.", keywords: ["graduation", "gift", "celebration"] },
  { q: "Do certain flowers repel insects?", a: "Marigolds and lavender can help keep insects away.", keywords: ["insect", "mosquito", "repel"] },
  { q: "How do I dry flowers for keepsakes?", a: "Hang them upside down in a dark, dry place or use silica gel to preserve their shape.", keywords: ["dry", "preserve", "keepsake"] }
];

const FlowerChatBot = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [input, setInput] = useState("");

  const handleAsk = (question) => {
    const lowerQ = question.toLowerCase();

    // First try exact match
    let answer = faq.find(f => f.q.toLowerCase() === lowerQ)?.a;

    // If no exact match, try keyword matching
    if (!answer) {
      const related = faq.filter(f =>
        f.keywords.some(k => lowerQ.includes(k))
      );
      if (related.length > 0) {
        answer = "Here are some related questions:\n" + 
          related.map(r => "- " + r.q).join("\n");
      }
    }

    if (!answer) {
      answer = "I don't have that answer yet, but I'm learning! 🌸";
    }

    setChat(prev => [...prev, { type: "user", text: question }, { type: "bot", text: answer }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleAsk(input.trim());
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.div 
        className="flower-bot-button" 
        onClick={() => {
          setOpen(prev => {
            const newOpen = !prev;
            if (newOpen) setChat([]); // reset chat on open
            return newOpen;
          });
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🌸
      </motion.div>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div 
            className="flower-bot-window"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flower-bot-header">
              Fleurora Bot 🌸
              <button onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="flower-bot-body">
              {chat.length === 0 ? (
                <div className="flower-bot-intro">
                  <p>Hello! Ask me anything about flowers 🌷</p>
                  <ul>
                    {faq.slice(0,5).map((f, i) => ( // show first 5 examples
                      <li key={i} onClick={() => handleAsk(f.q)}>{f.q}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                chat.map((msg, idx) => (
                  <div key={idx} className={`flower-bot-msg ${msg.type}`}>
                    {msg.text}
                  </div>
                ))
              )}
            </div>
            <form className="flower-bot-input" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Ask about flowers..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FlowerChatBot;
