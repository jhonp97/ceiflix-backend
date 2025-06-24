import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getWatchedMovies } from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/mylist", authMiddleware, getWatchedMovies);

