const express = require("express");
const path = require('path');
const oracledb = require('oracledb');
const bp = require('body-parser')


const PORT = 3001;

const app = express();
const conString = '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=LAPTOP-7VRQVPRP)(PORT=1521)))'

//parse incoming requests
app.use(bp.json());
app.use(bp.urlencoded());

// Handle GET requests to /api route
app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post("/execute-query", (req, res) => {
    const { query } = req.body
    try {
        oracledb.getConnection({
            user: 'C##vishal',
            password: '1234567890',
            tns: conString
        }, async function (err, con) {
            try {
                let data = await con.execute(query)
                res.send(data)
            } catch (error) {
                res.send(error)
            }
        })
    } catch (error) {
        console.error(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});