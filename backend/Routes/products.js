const express = require("express");
const router = express.Router();

const Productos = require("../models/products");

router.get("/listarProductos", async(req, res) =>{
    const result = await Productos.readAll();
    return res.status(200).send(result);
});


router.post("/resgitrarProducto", async(req, res) =>{
    if(!req.body.nombre || !req.body.precio || !req.body.cantidadStock)
        return res.status(400).send("Data incompleta");



    
});

module.exports = router;