const {Languaje} = require('../db');


const getLanguaje= async (req, res) => {
    try {
        const languajes = await Languaje.findAll();

      res.status(200).json(languajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getLanguaje;
  