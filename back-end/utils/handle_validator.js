const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
    try{
        validationResult(req).throw();
        return next; //Continue to controller
    } catch (err) {
        // Return 403 error if does not pass the validations
        res.status(403);
        res.send({ errors: err.array() })
    }
}

module.exports = validateResults