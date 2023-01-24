const express = require('express');
const mysql = require('mysql');

const app = express();

app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static(__dirname + '/views/utility'));

const db = mysql.createConnection({
    host: "localhost",
    database: "kb_hanifa",
    user: "root",
    password: "",
})

db.connect((err) => {

    if (err) throw err;
    console.log("Connection Established...");

    app.get("/", (req, res) => {
        const home = "SELECT * FROM home";
        db.query(home, (err, result) => {

            const data_home = JSON.parse(JSON.stringify(result));
            res.render("index", { data_home: data_home });

        })
    })


})


app.listen(8000, () => {
    console.log("ready");
})