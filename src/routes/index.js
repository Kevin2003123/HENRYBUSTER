const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const getMovies = require("../controllers/getMovies");
const getFormat = require("../controllers/getFotmat");
const getGenre = require("../controllers/getGenres");
const getLanguaje = require("../controllers/getLanguaje");

const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/movies", getMovies);
router.get("/formats", getFormat);
router.get("/genres", getGenre);
router.get("/languajes", getLanguaje);


module.exports = router;
