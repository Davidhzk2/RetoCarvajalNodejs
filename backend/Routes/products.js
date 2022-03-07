const express = require("express");
const router = express.Router();

router.post("/api/registerProdcut", async(req, res) =>{
    if(!req.body.nombre || !req.body.precio || !req.body.cantidadStock)
        return res.status(400).send("Data imcompleta");
})

module.exports = router;