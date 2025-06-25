import express from "express";
import {
  getPeliculasPopulares,
  getDetallePelicula,
  buscarPeliculas,
  filtrarPeliculas 
} from "../controllers/tmdb.controller.js";

const router = express.Router();

router.get("/populares", getPeliculasPopulares);
router.get("/pelicula/:id", getDetallePelicula);
router.get("/buscar", buscarPeliculas);
router.get("/filtrar", filtrarPeliculas); 

export default router;
