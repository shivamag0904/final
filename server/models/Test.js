const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const testSchema = new Schema(
  {
    question: {
      type: String,
      require: true,
    },
    choiceA: {
      type: String,
    },
    choiceB: {
      type: String,
    },
    choiceC: {
      type: String,
    },
    choiceD: {
      type: String,
    },
    answer: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
