const express = require('express');// app.js
const path = require("node:path");
const indexRouter = require('./routes/index');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);



const port = process.env.PORT || 3000;

 app.listen(port, () => {
    console.log(`Server running on port ${port}`)
 });
