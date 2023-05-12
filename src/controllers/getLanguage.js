const {Language} = require('../db');


const getLanguage= async (req, res) => {
    try {
        const languajes = await Language.findAll();

      res.status(200).json(languajes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getLanguage;
  