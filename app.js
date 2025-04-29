const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const items = [];

app.get("/", function(req, res) {
    res.render("list", { ejes: items });
});

app.post("/", function(req, res) {
    const item = req.body.elel.trim(); // Remove surrounding spaces
    if (item !== "") {
        items.push(item); // Only add non-empty strings
    }
    res.redirect("/");
});

app.listen(5000, function() {
    console.log("Server started on port 5000");
});
