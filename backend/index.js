const express = require("express");
const {connection } =  require("./db/db");
require("dotenv").config();

const app =  express();

app.listen(process.env.PORT, ()=>{
    console.log("el servidor esta corriendo en el puerto:" + process.env.PORT)
});

connection();