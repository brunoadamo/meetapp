import { Router } from 'express';

const routes = new Router();

export default routes;

routes.get('/users', { teste: true });
