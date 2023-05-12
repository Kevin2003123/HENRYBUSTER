const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const getMovies = require("../controllers/getMovies");
const getFormat = require("../controllers/getFotmat");
const getGenre = require("../controllers/getGenres");
const getLanguage = require("../controllers/getLanguage");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/movies", getMovies);
router.get("/formats", getFormat);
router.get("/genres", getGenre);
router.get("/languages", getLanguage);


module.exports = router;
