require('dotenv').config();

const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');

const connectDb = require('./database/connect');
const orderRoute = require('./routes/orderRoute');
const productRoute = require('./routes/productRoute');
const customerRoute = require('./routes/customerRoute');
const userRoute = require('./routes/userRoute');
const frontendRoute = require('./routes/frontendRoute');

const app = express();

// engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

// serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json());

app.use(orderRoute);
app.use(productRoute);
app.use(customerRoute);
app.use(userRoute);

app.use(frontendRoute);

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
