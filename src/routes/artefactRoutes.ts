import { Router } from 'express';
import {
  getArtefacts,
  getArtefact,
  createArtefact,
  updateArtefact,
  deleteArtefact
} from '../controllers/artefactController';
import { validateSchema } from '../middlewares/validationMiddleware';
import { createArtefactSchema, updateArtefactSchema } from '../schemas/artefactSchema';

// Artefact layout Route
const artefactRoute = Router();

artefactRoute.get('', getArtefacts);
artefactRoute.get('/:artefactid', getArtefact);
artefactRoute.post('', validateSchema(createArtefactSchema), createArtefact);
artefactRoute.patch('/:artefactid', validateSchema(updateArtefactSchema), updateArtefact);
artefactRoute.delete('/:artefactid', deleteArtefact);

export default artefactRoute;