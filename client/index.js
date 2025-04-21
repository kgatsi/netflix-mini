import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use 'client' in modern React
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
const movies = [
  { title: "Extraction", genre: "Action" },
  { title: "Barbie", genre: "Comedy" },
  { title: "The Witcher", genre: "Fantasy" },
  { title: "Shrek", genre: "Animation" }
];


