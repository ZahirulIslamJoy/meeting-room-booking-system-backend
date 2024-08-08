import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { RoomRoutes } from '../modules/room/room.route';

const router = express.Router();

const routes = [
    {
        path : "/auth",
        route : AuthRoutes
    },
    {
        path : "/rooms",
        route : RoomRoutes
    }
]

routes.forEach((route)=>router.use(route.path,route.route))

export default router;