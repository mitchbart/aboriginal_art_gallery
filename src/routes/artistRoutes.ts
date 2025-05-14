import { Router } from 'express';
import {
  getArtist,
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist
} from '../controllers/artistController';

// Artist layout Route
const artistRoute = Router();

artistRoute.get('', getArtists);
artistRoute.get('/:userid', getArtist);
artistRoute.post('', createArtist);
artistRoute.patch('/:userid', updateArtist);
artistRoute.delete('/:userid', deleteArtist);

export default artistRoute;