const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');
const morgan = require('morgan');
const books = require("./routes/books");
const authors = require("./routes/authors");

const port = process.env.PORT || 9000;

app.use(cors());
app.use(bodyParser.json());

app.use("/books", books);
// app.use("/authors", authors);

app.listen(port, () => {
    console.log(`I'm listening on ${port}`);
})