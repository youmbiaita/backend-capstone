const Order = require('../models/Order.js');

//export all functions
module.exports = {
    validateOrder,
    getAllOrders,
    createOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
  };

  //middleware functin to validate orders
async function validateOrder(req, res, next) {
  const { userId, orderItems, status } = req.body;
  let message = "";
  if (!userId) message += 'userId, ';
  if (!orderItems) message += 'orderItems, ';
  if (!status) message += 'status.';

  if (message) {
    return res.status(400).send("Missing field(s) required: " + message);
  }
  next();
};

//function to get all orders
async function getAllOrders(req, res) {
  try {
    const orders = await Order.find().populate('userId orderItems');
    res.json(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to create a new order
async function  createOrder(req, res) {
  const { userId, orderItems, total, status } = req.body;
  const order = new Order({ userId, orderItems, status });

  try {
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to get an order using Id
async function getOrderById(req, res) {
  try {
    const order = await Order.findById(req.params.id).populate('userId orderItems');
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to update order using Id
async function updateOrderById(req, res) {
  const { userId, orderItems, status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(req.params.id, { userId, orderItems, status }, { new: true });
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

//function to delete an order using Id
async function deleteOrderById(req, res) {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).send('Order not found');
    res.json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


