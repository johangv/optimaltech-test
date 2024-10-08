const { Book } = require("../models/book")

/**
 * Get the list of books from database
 * @param {*} req 
 * @param {*} res 
 */
const getBooks = (req, res) => {
    const data = [];

    res.send({data});
};

/**
 * Update a book from database
 * @param {*} req 
 * @param {*} res 
 */
const updateBook = (req, res) => {

};

/**
 * Delete a book from database
 * @param {*} req 
 * @param {*} res 
 */
const deleteBook = (req, res) => {

};

/**
 * Get one book from database by id
 * @param {*} req 
 * @param {*} res 
 */
const getBook = (req, res) => {

};

/**
 * Save a new book in database
 * @param {*} req 
 * @param {*} res 
 */
const saveBook = async (req, res) => {
    const { body } = req;
    console.log(body);
    res.send({algo:1});
};

module.exports = { getBooks, updateBook, deleteBook, getBook, saveBook };