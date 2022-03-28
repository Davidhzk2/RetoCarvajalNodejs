
const {Pool}  = require('pg');

const dbConnection = {
   user: "postgres",
   host:"localhost",
   database:"RetoCarvajal",
   password: "dbadmin2022",
   port: 5432
};

const pool = new Pool(dbConnection);


const connection = async()=>{
    try {
        const res = await pool.query('SELECT NOW()')
        console.log("Connection succesffuly");
        
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }
}

module.exports = {connection, dbConnection}