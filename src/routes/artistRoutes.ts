import { Router } from 'express';
import {
  getArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist
} from '../controllers/artistController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { createArtistSchema, updateArtistSchema } from '../schemas/artistSchema';

// Artist layout Route
const artistRoute = Router();

artistRoute.get('', getArtists);
artistRoute.get('/:artistid', getArtist);
artistRoute.post('', validateSchema(createArtistSchema), createArtist);
artistRoute.patch('/:artistid', validateSchema(updateArtistSchema), updateArtist);
artistRoute.delete('/:artistid', deleteArtist);

export default artistRoute;