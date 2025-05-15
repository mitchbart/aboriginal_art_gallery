import { Router } from 'express';
import artistRoute from './artistRoutes';
import artefactRoute from './artefactRoutes';

// Index
const indexRoute = Router();

indexRoute.get('', async (req, res) => {
  res.json({ message: 'Hello there' });
});

indexRoute.use('/artists', artistRoute);
indexRoute.use('/artefacts', artefactRoute);

export default indexRoute;