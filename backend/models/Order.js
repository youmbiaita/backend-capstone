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
    status: {
         type: String
    }
  });

module.exports = model('Order', orderSchema);
