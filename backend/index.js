const express = require("express");
const {connection } =  require("./db/db");
require("dotenv").config();
const Product = require("./Routes/products");


// http://localhost:8000/api/products/registrarProducto

const app =  express();

app.use(express.json());

//Modulos
app.use("/api/products/", Product);

app.listen(process.env.PORT, () =>
    console.log("el servidor esta corriendo en el puerto:" + process.env.PORT)
);

connection();