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

// Leer por Id
const readById = async (id) =>{
    try {
        const result = await pool.query('SELECT * FROM Productos WHERE ID = $1',[id]);
        // if (!result) return
        return result.rows[0];
    } catch (error) {
        console.log("Ha ocurrido un " + error);
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

const searchBy = async(data)=>{
    try {
        // return data
        const result = await pool.query("SELECT * from productos WHERE nombre LIKE '%' || $1 || '%'", [data]);
        return result.rows;
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
        return result = error;
    }
}

const saveProduct = async (data) =>{
    try {
        const result = await pool.query('INSERT INTO productos (nombre, precio, cantidadStock) VALUES ($1,$2,$3)', [data.nombre, data.precio, data.cantidadStock]);
        return result.rows;
    } catch (err) {
        console.log("!"+ err);
        return result = err;
        
    }
}

module.exports  = {readAll, readCount, searchBy, readById, saveProduct}