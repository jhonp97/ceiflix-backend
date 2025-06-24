import mongoose from "mongoose";

const options = {
    collection: "users", // nombre de la coleccion en MongoDB
    strict: true, // solo permite guardar los campor definidos en el eschema 
    collation: {
        locale: "es", // idioma de la coleccion
        strength: 1 // nivel de comparacion de strings (1: ignora mayusculas y minusculas, 2: ignora acentos)
    }
}


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // para que tenga al menos 6 caracteres
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt:{
        type: Date,
        default: Date.now
    }
},  options );

export const User = mongoose.model("User", userSchema);
