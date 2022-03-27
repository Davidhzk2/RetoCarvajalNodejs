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

    const dataProduct = {
        nombre:req.body.nombre,
        precio:req.body.precio,
        cantidad: req.body.cantidadStock
    }  
    const result = await Productos.saveProduct(dataProduct);
    if (!result)
        return res.status(400).send(result);
        
    return res.status(200).send(result);


    
});

module.exports = router;