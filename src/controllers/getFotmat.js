const {Format} = require('../db');


const getFormat= async (req, res) => {
    try {
        const formats = await Format.findAll();

      res.status(200).json(formats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = getFormat;
  