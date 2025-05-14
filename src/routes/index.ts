import { Router } from 'express';
import artistRoute from './artistRoutes';

// Index
const indexRoute = Router();

indexRoute.get('', async (req, res) => {
  res.json({ message: 'Hello there' });
});

indexRoute.use('/artists', artistRoute);

export default indexRoute;