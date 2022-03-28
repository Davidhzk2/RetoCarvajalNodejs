const {Pool, Client} = require("pg");
const {dbConnection} = require("../db/db");

const pool = new Pool(dbConnection);

// leer cantidad de productos
const readCount = async() =>{
    try {
        const result = await pool.query("SELECT count(*) from productos;");
        return result.rows;
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
        return result = error;
    }
}
// Leer todos los productos
const readAll = async () =>{
    try {
        const result = await pool.query("SELECT * FROM Productos");
        if (!result) return
        return result.rows;
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
        return result = error;
        
    }
}

const saveProduct = async (data) =>{
    try {
        const result = await pool.query("INSERT INTO productos(nombre, precio, cantidadstock) VALUES (?, ?, ?),"[data.nombre, data.precio, data.cantidad]);
        return result;
    } catch (error) {
        console.log("!"+ error);
        return result = error.error;
        
    }
}

module.exports  = {readAll, readCount, saveProduct}