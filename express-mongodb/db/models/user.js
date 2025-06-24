import mongoose from "mongoose";
import bcrypt from "bcrypt";

const options = {
    collection: "authusers", // nombre de la coleccion en MongoDB
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

//  Encriptar la contraseña antes de guardar
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// 🔐 Método para comparar contraseñas
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
