import Express, { Request, Response } from 'express';
import cors from 'cors';
import indexRoute from './routes';

// Initiate express
const app = Express();

// Cors configuration
const corsOptions = {
  origin: true, // Production only, allow all origins
  credentials: true, // Allow cookies and authentication headers
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['X-Total-Count'], // Headers that the browser is allowed to access
  maxAge: 86400 // Cache preflight requests for 24 hours
}

// Apply cors
app.use(cors(corsOptions));

// Body parsing middleware
app.use(Express.json());

// Routes
app.use(indexRoute);

const port = process.env.PORT || 3000;

// Start the express server on the relevant port
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});