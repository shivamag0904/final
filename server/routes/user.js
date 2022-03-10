
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, forgotPassword, logout, updatePassword } = require("../controllers/userController");

router.post("/register",registerUser);

router.post("/signin", loginUser);


router.post("/forgot",forgotPassword)

router.put("/change-password",updatePassword)

router.get("/logout", logout);


module.exports = router;
