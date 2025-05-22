const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/books-db");
const booksRoute = require("./routes/books-routes");

const app = express();

const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/home/books', booksRoute);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})






