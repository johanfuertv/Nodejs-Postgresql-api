import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: 'localhost',
    user :"postgres",
    password: "postgres",
    database : "firstapi",
    port: "5432"
})

export const getUsers = async (req, res) => {
    try {
      const response = await pool.query("SELECT * FROM users");
      res.status(200).json(response.rows);
    } catch (err) {
      console.error(err); 
      res.status(500).json({ message: "Error consultando usuarios" });  
    }
  }

export const updateUsers = async (req, res) => {
    const response = await pool.query("UPDATE users SET name = $1, email = $2 WHERE ID = $3", [req.body.name, req.body.email, req.params.id])
    res.status(200).json(response.rows);
    res.json({
        message: "user updated succesfully",
        body:{
            user: {name: req.body.name, email: req.body.email}
        }
    })
     
 }

export const getUsersById = async (req, res) => {
    const response =  await pool.query("SELECT * FROM users WHERE ID = $1", [req.params.id])
    res.status(200).json(response.rows);
     
 }
 

export const createUsers = async (req, res) => {
    const {name,email} = req.body
   const response = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email])
    res.json({
        message: "user added succesfully",
        body:{
            user: {name, email}
        }
    })
 }

 export const deleteUsers= async (req, res) => {
   const response =  await pool.query("DELETE FROM users WHERE ID = $1", [req.params.id])
   res.status(200).json(response.rows);
     
 }

 
 