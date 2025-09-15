// middlewares/validate.js
const Validator = require("fastest-validator");
const v = new Validator();

function validate(schema, type = "body") {
  return (req, res, next) => {
    const data =
      type === "query" ? req.query :
      type === "params" ? req.params :
      req.body;

    const result = v.validate(data, schema);

    if (result === true) {
      return next();
    }

    res.status(400).json({
      message: "Validation Failed",
      errors: result
    });
  };
}

module.exports = validate;
