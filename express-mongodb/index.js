import express from "express"
import 'dotenv/config';
import cors from "cors"
import { DOMAIN, PORT } from "./config/config.js"
import { router } from "./routes/index.routes.js"


// import { conectarDB } from "./db/mongoose.js"

const app= express()


//middlewares
app.use(cors()) // permite conecvtar front y back sin errores de cors
app.use(express.json())
app.use(express.urlencoded({extended:true})) // leer los datos de formukarios html
app.use("/", express.static("public"))


// llamar a la funcion  de conexion de Mongoose
// conectarDB()

//ruta por fedecto
app.get("/", (req, res)=>{
    res.status(200).json({msg:"bienvenidos a mi api MongoDB"})
})

// rutas
app.use("/api/v1", router);


// middlewares de manejo de errores
// app.use(notFoundHandler)
// app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`mi servidor se esta ejecutando correctamente en ${DOMAIN}:${PORT}`)
})