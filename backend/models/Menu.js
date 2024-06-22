const { Schema, model } = require("../config/db-connection.js");

//menu schema
const menuSchema = new Schema({
  name: {
    type: String,
    required: true,
  
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = model("Menu", menuSchema);
