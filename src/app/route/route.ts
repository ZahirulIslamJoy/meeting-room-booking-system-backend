import express from 'express';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const routes = [
    {
        path : "/auth",
        route : UserRoutes
    }
]

routes.forEach((route)=>router.use(route.path,route.route))

export default router;