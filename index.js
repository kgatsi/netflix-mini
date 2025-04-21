const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public')); // serve frontend files

const movies = [
  { title: "Extraction", genre: "Action" },
  { title: "Avatar", genre: "Comedy" },
  { title: "The Witcher", genre: "Fantasy" }
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(3000, () => {
  console.log("✅ Backend running on port 3000");
});

