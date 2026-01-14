const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  color: String,
  planetName: String,
  placementFromSun: String,
  age: Number,
  hasMultiMoons: Boolean,
  hasAMoon: Boolean,
  isItDwarf: Boolean,
});

module.exports = mongoose.model("planet", planetsSchema);
