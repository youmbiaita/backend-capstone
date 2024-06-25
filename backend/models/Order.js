const { Schema, model } = require('../config/db-connection.js');

//Order schema
const orderSchema = new Schema({
    userId: { 
        type: String,
        required: true },
    orderItems: [
        { 
            type: Array, 
             required: true,
             menuId: {
                type: String,
                required: true
             },
             quantity: {
                type: Number,
                required: true
             }

        }
    ],
    status: {
         type: String
    }
  });

module.exports = model('Order', orderSchema);
