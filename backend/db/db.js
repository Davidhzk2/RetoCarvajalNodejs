
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
    // console.log(typeof dbConnection.password);
    try {
        // pool.
        const res = await pool.query('SELECT NOW()')
        console.log("Connection succesffuly");
        // pool.end();
        
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }
}


// pool.connect();

module.exports = {connection, dbConnection}