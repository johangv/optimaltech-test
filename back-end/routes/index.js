const express = require('express');
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO tracks.js
    return fileName.split('.').shift();
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //TODO index, books, etc
    if(name !== 'index'){
        router.use(`/${name}`, require(`./${file}`)); //TODO http://localhost:3000/api/books
    }
});

module.exports = router;