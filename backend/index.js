const express = require("express");
const cors  = require("cors");
const {connection} =  require("./db/db");
require("dotenv").config();
const Product = require("./Routes/products");

const app =  express();

app.use(express.json());
app.use(cors());

//Modulos
app.use("/api/products/", Product);

app.listen(process.env.PORT, () =>
    console.log("el servidor esta corriendo en el puerto:" + process.env.PORT)
);

connection();