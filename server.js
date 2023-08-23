const express = require('express');
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

const app = express();


// DB connection
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