const Customer = require('../models/customerModel');

async function getAllCustomers(req, res) {
  try {
    const customers = await Customer.find();
    res.status(200).json({ customers });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function getCustomer(req, res) {
  try {
    const customerId = req.params.id;
    const customer = await Customer.find({ _id: customerId });
    res.status(200).json({ customer });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function createCustomer(req, res) {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json({ customer });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updateCustomer(req, res) {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findByIdAndUpdate(
      { _id: customerId },
      req.body,
      {
        runValidators: true,
        new: true,
      }
    );

    if (!customer) {
      throw new Error('Customer not found');
    }
    res.status(200).json({ customer });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deleteCustomer(req, res) {
  try {
    const customerId = req.params.id;
    await Customer.findByIdAndRemove({ _id: customerId });
    res.status(200).send('Customer deleted');
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
  getAllCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
