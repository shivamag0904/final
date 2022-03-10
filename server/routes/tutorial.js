"use strict";
const express = require("express");
const { addTutorial, addTraining, getallTrainings, getTrainingById, addVideoToTraining } = require("../controllers/tutorialController");
const {requireSignin} = require('../middlewares/index')

const router = express.Router();

router.post("/training",addTraining);
router.get("/training",getallTrainings);
router.get("/training/:id",getTrainingById);
router.put("/training/:id",addVideoToTraining);


module.exports = router;