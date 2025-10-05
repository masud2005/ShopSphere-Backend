import { NextFunction, Request, Response, Router } from "express";
import { UserControllers } from "./user.controller";
import z, { ZodObject } from "zod";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.validation";


const router = Router();

router.post('/register', validateRequest(createUserZodSchema), UserControllers.createUser);
router.get('/all-users', UserControllers.getAllUsers);
router.patch('/:id', validateRequest(updateUserZodSchema), UserControllers.updateUser);
router.delete('/:id', UserControllers.deleteUser);


export const UserRoutes = router;