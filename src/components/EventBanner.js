import React from 'react';
import '@styles/EventBanner.css';

const events = [
  { date: '08/01', text: "Celebrate Her on National Girlfriends Day, 8/1" },
  { date: '02/14', text: "Share love on Valentine's Day, 2/14" },
  { date: '05/12', text: "Don't forget Mother's Day, 5/12" },
  // Add more if you want
];

const fallbackSayings = [
  "Flowers are the music of the ground.",
  "Say it with flowers.",
  "A flower a day keeps sadness away.",
  "Bloom with grace.",
  "Happiness blooms from within."
];

export default function EventBanner() {
  const today = new Date();
  const todayStr = today.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });

  const todayEvent = events.find(event => event.date === todayStr);
  const fallback = fallbackSayings[today.getDate() % fallbackSayings.length]; // pick quote by day

  return (
    <div className="top-banner">
      {todayEvent ? todayEvent.text : fallback}
    </div>
  );
}
