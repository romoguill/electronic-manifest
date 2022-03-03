require('dotenv').config();
const express = require('express');

const connectDb = require('./database/connect');
const orderRoute = require('./routes/orderRoute');
const productRoute = require('./routes/productRoute');

const app = express();

// Middlewares
app.use(express.json());

app.use(orderRoute);
app.use(productRoute);

port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App listening on port ${port}...`);
    });
  } catch (error) {
    console.log('There was an error in setting up the server');
  }
};

start();
