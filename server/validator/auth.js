const { check } = require("express-validator");

exports.validateRegisterRequest = [
  check("name").notEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long"),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid Email is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 character long"),
];

// exports.isRequestValidated = (req,res,next)=>{
//   const errors = validationRequest(req);
//   if(errors.array().Length()>0){
//     return res.status(400).json({error: errors.array()[0].msg})
//   }
//   next();
// }
