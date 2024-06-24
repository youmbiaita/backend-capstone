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
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean
  }
  
});
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema);
