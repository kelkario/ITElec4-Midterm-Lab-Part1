// index.js
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan'; // Import morgan
import postRoutes from './src/routes/post.routes.js';
import { config } from '.src/config/index.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
// Use the PORT from environment variables, with a fallback to 3000
const port = process.env.PORT || 3000;

// Middlewares
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('combined'));
} else {
    app.use(morgan('short'));
}

app.use(express.json());

// Mount the post routes
app.use('/posts', postRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});