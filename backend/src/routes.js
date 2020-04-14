import { Router } from 'express';
import OngController from './controllers/OngController';
import IncidentsController from './controllers/IncidentController';
import ProfileController from './controllers/ProfileController';
import SessionController from './controllers/SessionController';

const routes = Router();
const ongController = new OngController();
const incidentController = new IncidentsController();
const profileController = new ProfileController();
const sessionController = new SessionController();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.index);

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

export default routes;
