const { Schema, model } = require('../config/db-connection.js');

//User schema
const userSchema = new Schema({
  
  name: { 
    type: String,
    required: true, 
    index: true },
  email: { 
    type: String, 
    required: true, 
    unique: true
   },
  password: {
    type: String
  },
  isAdmin: {
    type: Boolean
  }
  
});

module.exports = model('User', userSchema);
