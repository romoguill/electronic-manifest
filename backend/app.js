const express = require('express');

const orderRoute = require('./routes/orderRoute');

const app = express();

app.use(orderRoute);

port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
