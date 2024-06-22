const { Schema, model } = require('../config/db-connection.js');

//Order schema
const orderSchema = new Schema({
    userId: { 
        type: String,
       
        required: true },
    orderItems: [
        { 
            type: Array,
             ref: 'menu', 
             required: true 
        }
    ],
    total: { 
        type: Number,
         required: true },
    status: {
         type: String,
          required: true 
    }
  });

module.exports = model('Order', orderSchema);
