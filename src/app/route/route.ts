import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { RoomRoutes } from '../modules/room/room.route';
import { SlotRoutes } from '../modules/slot/slot.route';

const router = express.Router();

const routes = [
    {
        path : "/auth",
        route : AuthRoutes
    },
    {
        path : "/rooms",
        route : RoomRoutes
    },
    {
        path : "/slots",
        route : SlotRoutes
    }
]

routes.forEach((route)=>router.use(route.path,route.route))

export default router;