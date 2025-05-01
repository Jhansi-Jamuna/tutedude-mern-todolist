// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// const items = [];

// app.get("/", function(req, res) {
//     res.render("list", { ejes: items });
// });

// app.post("/", function(req, res) {
//     const item = req.body.elel.trim(); // Remove surrounding spaces
//     if (item !== "") {
//         items.push(item); // Only add non-empty strings
//     }
//     res.redirect("/");
// });

// app.listen(5000, function() {
//     console.log("Server started on port 5000");
// });


// const express = require("express");
// const bodyParser = require("body-parser");
// const fs = require("fs");
// const path = require("path");

// const app = express();

// // Set EJS as the view engine
// app.set("view engine", "ejs");
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// // Path to the file where items will be stored
// const filePath = path.join(__dirname, "items.json");

// // Function to read the items from the file
// function readItemsFromFile() {
//     if (fs.existsSync(filePath)) {
//         const data = fs.readFileSync(filePath);
//         return JSON.parse(data);
//     }
//     return [];
// }

// // Function to write the items to the file
// function writeItemsToFile(items) {
//     fs.writeFileSync(filePath, JSON.stringify(items, null, 2));
// }

// // Route to display the Todo List
// app.get("/", function(req, res) {
//     const items = [];  // Ensure items array is empty when loading the page
//     writeItemsToFile(items);  // Reset the items in the file
//     res.render("list", { items: items });
// });

// // Route to add new item
// app.post("/", function(req, res) {
//     const item = req.body.elel?.trim();
//     if (item !== "") {
//         const items = readItemsFromFile();
//         items.push(item);
//         writeItemsToFile(items);
//     }
//     res.redirect("/");
// });

// // Route to delete an item
// app.post("/delete", function(req, res) {
//     const index = parseInt(req.body.index);
//     const items = readItemsFromFile();
//     if (!isNaN(index)) {
//         items.splice(index, 1);
//         writeItemsToFile(items);
//     }
//     res.redirect("/");
// });

// // Starting the server
// app.listen(5000, function() {
//     console.log("Server started on port 5000");
// });
 

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// In-memory items list (not stored permanently)
let items = [];

// Route to display the Todo List (clears on refresh)
app.get("/", function (req, res) {
    items = []; // clear items on every page load
    res.render("list", { ejes: items });
});

// Route to add new item
app.post("/", function (req, res) {
    const text = req.body.text?.trim();
    const priority = req.body.priority || "Normal";

    if (text !== "") {
        items.push({ text, priority });
    }

    res.render("list", { ejes: items });
});

// Route to delete an item
app.post("/delete", function (req, res) {
    const index = parseInt(req.body.index);
    if (!isNaN(index) && index >= 0 && index < items.length) {
        items.splice(index, 1);
    }

    res.render("list", { ejes: items });
});

app.listen(5000, function () {
    console.log("Server started on port 5000");
});
