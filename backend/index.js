
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mysql = require('mysql')
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_db"
})
app.get('/',(req,res)=>{
    res.json("welcome frome backend")
})

app.get('/products',(req,res)=>{
  const sql = "select * from products"
  db.query(sql,(err,data)=>{
    if(err){
        res.json(err)
    }else{
        res.json(data)
    }
  })

})
app.post("/products", (req, res) => {
  const sql = "INSERT INTO products (name, image, price, qty) VALUES (?)";
  const values = [
    req.body.name,
    req.body.image,
    req.body.price,
    req.body.qty
  ]
  db.query(sql,[values], (err, data) => {
    if (err) {
    return  res.json(err);
    } else {
     return res.json(data);
    }
  });
});
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM products WHERE id = ?";
  
  
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.put("/update/:id", (req, res) => {

  const sql = "update products set name = ?,image = ?,price = ?,qty = ? where id = ?";
  const values = [req.body.name, req.body.image, req.body.price, req.body.qty];
  const id = req.params.id;
  db.query(sql, [...values,id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.get("/getRecord/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM products WHERE id = ?";

  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

app.listen(port,console.log(`connected to server on ${port}`))