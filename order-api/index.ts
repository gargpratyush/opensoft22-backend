import express, { Express } from 'express';
import dotenv from 'dotenv';

const cart = require("./routes/cart");
const orders = require("./routes/orders");

const connection = require('./config/db.config');

// Setup environment variables from .env file.
dotenv.config();

// Initialize express framework.
const app: Express = express();

// Test route to check if API is running.
app.use(express.json());

app.use('/cart', cart);
app.use('/orders', orders);



// Configuring PORT to start server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT} ⚡`);
});