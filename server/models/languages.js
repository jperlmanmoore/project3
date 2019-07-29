const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languagesSchema = new Schema({
  language: { type: String, required: true, unique: true, trim: true },
  languageCode: {type: String, required: true, unique: true, trim: true}

});

const Languages = mongoose.model("Languages", languagesSchema);

module.exports = Languages;