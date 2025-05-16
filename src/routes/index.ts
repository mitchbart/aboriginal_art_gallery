import { Router } from 'express';
import artistRoute from './artistRoutes';
import artefactRoute from './artefactRoutes';
import exhibitionRoute from './exhibitionRoutes';

// Index
const indexRoute = Router();

indexRoute.get('', async (req, res) => {
  res.json({ message: 'Hello there' });
});

indexRoute.use('/artists', artistRoute);
indexRoute.use('/artefacts', artefactRoute);
indexRoute.use('/exhibitions', exhibitionRoute);

export default indexRoute;