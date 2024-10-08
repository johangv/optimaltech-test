const express = require("express");
const router = express.Router();
const { validatorCreateBook } = require("../validators/books");
const {getBooks, getBook, saveBook} = require("../controllers/books");

//TODO: http://localhost/books GET, POST, DELETE, PUT

router.get("/",getBooks);
router.post("/", validatorCreateBook, saveBook);

module.exports = router;