const {Genre} = require('../db');


const getGenre= async (req, res) => {
    try {
        const genres = await Genre.findAll();

      res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getGenre;
  