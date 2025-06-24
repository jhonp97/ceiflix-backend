
import mongoose from "mongoose";
const options = {
    collection: "watchedmovies", // nombre de la coleccion en MongoDB
    strict: true, // solo permite guardar los campor definidos en el eschema 
    collation: {
        locale: "es", // idioma de la coleccion
        strength: 1 // nivel de comparacion de strings (1: ignora mayusculas y minusculas, 2: ignora acentos)
    }
}

const watchedMovieSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tmdbId: {
    type: Number, // el id que viene de la API de TMDB
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  calificacion: {
    type: Number, // del 1 al 5
    min: 1,
    max: 5,
    default: 1,
  },
}, options);

export const WatchedMovie = mongoose.model("WatchedMovie", watchedMovieSchema);
