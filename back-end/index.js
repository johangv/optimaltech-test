require("dotenv").config()

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('App running on http://localhost:'+port);
});

