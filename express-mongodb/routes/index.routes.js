import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getWatchedMovies } from "../controllers/movie.controller.js";
import movieRoutes from "./movies.routes.js";

const router = express.Router();

router.get("/mylist", authMiddleware, getWatchedMovies);
router.use("/auth", authRoutes);
router.use("/peliculas", movieRoutes);

export { router };