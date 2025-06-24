import express from "express";
import { agregarPeliculaVista, obtenerPeliculasVistas, calificarPelicula, obtenerListaPublica} from "../controllers/movie.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
//RUTAS PROTEGIDAS
//  ver películas vistas del usuario
router.get("/mis-peliculas", authMiddleware, obtenerPeliculasVistas);
//  agregar nueva película vista
router.post("/agregar", authMiddleware, agregarPeliculaVista);
//  modificar calificación
router.patch("/calificar/:id", authMiddleware, calificarPelicula);

//RUTAS PUBLICAS
//  ver lista de otro usuario por su username
router.get("/publica/:username", obtenerListaPublica);

export default router;
