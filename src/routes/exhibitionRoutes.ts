import { Router } from 'express';
import {
  getExhibitions,
  getExhibition,
  createExhibition,
  updateExhibition,
  deleteExhibition
} from '../controllers/exhibitionController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { createExhibitionSchema, updateExhibitionSchema } from '../schemas/exhibitionSchema';

// Exhibition layout Route
const exhibitionRoute = Router();

exhibitionRoute.get('', getExhibitions);
exhibitionRoute.get('/:exhibitionid', getExhibition);
exhibitionRoute.post('', validateSchema(createExhibitionSchema), createExhibition);
exhibitionRoute.patch('/:exhibitionid', validateSchema(updateExhibitionSchema), updateExhibition);
exhibitionRoute.delete('/:exhibitionid', deleteExhibition);

export default exhibitionRoute;