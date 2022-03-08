const {Pool, Client} = require("pg");

const pool = new Pool()


const readAll = async () =>{
    const result = await pool.query("SELECT * FROM Productos");
    return result
}

module.exports  = {readAll}