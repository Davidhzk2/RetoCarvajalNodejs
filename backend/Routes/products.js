const express = require("express");
const router = express.Router();

const Productos = require("../models/products");

// Metodos
router.get("/listarProductos", async(req, res) =>{
    const result = await Productos.readAll();
    return res.status(200).send(result);
});

router.get("/listarporId/:id", async(req, res) =>{
    const id = req.params.id;
    // return res.send(id);
     const result = await Productos.readById(id);
    return res.status(200).send(result);
});

router.get("/cantidadProductos", async(req, res) =>{
    const result = await Productos.readCount();
    return res.status(200).send(result);
});

router.get("/buscarProductos/:nombre", async(req, res)=>{
    const nombre = req.params.nombre;
    const result = await Productos.searchBy(nombre);
    // if(!result.rows) return res.status(400).send(result);
    return res.status(200).send(result);
});

router.post("/resgitrarProducto", async(req, res) =>{
    if(!req.body.nombre || !req.body.precio || !req.body.cantidadStock)
        return res.status(400).send("Data incompleta");

    const dataProduct = {
        nombre:req.body.nombre,
        precio:req.body.precio,
        cantidadStock: req.body.cantidadStock
    }  
    const result = await Productos.saveProduct(dataProduct);
    if (!result)
        return res.status(400).send(result);
        
    return res.status(200).send(result);


    
});

module.exports = router;