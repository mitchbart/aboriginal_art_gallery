import Express, { Request, Response } from 'express';
import cors from 'cors';
import indexRoute from './routes';

// Initiate express
const app = Express();

// Apply cors, configuration not needed until a frontend is made
app.use(cors());

// Body parsing middleware
app.use(Express.json());

// Routes
app.use(indexRoute);

const port = process.env.PORT || 3000;

// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});