require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const router = require('./routes/router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use('/', router);

// Mongoose connection
mongoose
  .connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    console.log('Connected to MongoDB successfully');

    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server Running on port ${process.env.SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB. Error:', err);
  });
