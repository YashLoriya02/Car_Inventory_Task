const express = require('express')
const mysql = require("mysql2")
const cors = require('cors')

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

app.get('/getData', async (req, res) => {
    // const { itemId, stock_count, purchase_order_id, sales_order_id, purchase_value, sales_value } = req.body

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Yash@123",
        database: "CarInventory"
    });

    const sql = 'SELECT * FROM item';
    con.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
            res.status(200).json({ data: result })
        }
    });
})

app.listen(PORT, (req, res) => {
    console.log("Server Running on Port 5000")
})