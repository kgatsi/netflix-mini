    const express = require('express');
    const cors = require('cors');
    const app = express();

    app.use(cors());
    app.use(express.static('public'));

    const movies = [
      { title: "Extraction", genre: "Action" },
      { title: "Barbie", genre: "Comedy" },
      { title: "The Witcher", genre: "Fantasy" },
      { title: "Shrek", genre: "Animation" },
      { title: "Shrek2", genre: "Animation" } ,
    ];

    app.get('/api/movies', (req, res) => {
      res.json(movies);
    });

    app.listen(3000, () => {
      console.log('✅ Backend running on port 3000');
    });
