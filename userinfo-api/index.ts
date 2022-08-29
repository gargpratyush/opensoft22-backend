import express, { Express } from 'express';
import dotenv from 'dotenv';

const userinfo = require("./routes/userinfo");

const connection = require('./config/db.config');

// Setup environment variables from .env file.
dotenv.config();

// Initialize express framework.
const app: Express = express();

// Test route to check if API is running.
app.use(express.json());

app.use('/users', userinfo);



// Configuring PORT to start server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT} ⚡`);
});