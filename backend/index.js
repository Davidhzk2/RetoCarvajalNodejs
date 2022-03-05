const {Client,  Pool}  = require('pg');

const dbConnection = {
   user: "postgres",
   host:"localhost",
   database:"postgres",
   password: 'dbadmin2022',
   port: 5432
};

const pool = new Pool(dbConnection);

const getPerson = async() =>{
     const res  = await pool.query('Select * from persona');
    console.log(res.rows);

}

getPerson()
// const client = new Client()
// const connectionDB  = {
//     user: "postgres",
//     host: "localhost",
//     database:"RetoCarvajal",
//     password:"dbadmin2022",
//     port: 5432
// }

// const dbConnection = async () =>{
    
//         await client.connect();
//         const res = await client.query('use database RetoCarvajal')
//         console.log("probando conexion ", res);
//         await client.end()
        
  
// }

// dbConnection();
// const pool = new  Client(connectionDB);