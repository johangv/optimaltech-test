const { check } = require("express-validator");
const validateResults = require("../utils/handle_validator");

const validatorCreateBook = [
    check("name").exists().notEmpty(),
    (req, res, next) => {
        return validateResults(req, res, next);
    }
]

module.exports = { validatorCreateBook };