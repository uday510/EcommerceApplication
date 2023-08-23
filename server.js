const express = require('express');
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
require("./routes")(app);

// Error handler
app.use((req, res) => {
    // center 404 error handler
    res.status(404).send( {url: req.originalUrl + ' not found on this server'});
});

// REGION : AWS Mumbai (ap-south-1)
// Cluster Tier : M0 Sandbox (General)
// Read & Write speed : 100 IOPS

mongoose
    .connect(dbConfig.DB_URL, {
        useNewUrlParser: true, // To avoid Deprecation Warning
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(4000);
        console.log("Database connected and server running at port 4000");
    })
    .catch((err) => {
        // throw err;
        console.log("Database connection error", err.message);
    });