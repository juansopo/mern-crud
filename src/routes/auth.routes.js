import { Router } from "express";
import { login, register, logout, profile } from "../controllers/auth.controller.js"
import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
export const router = Router();

router.post('/register', validatorSchema(registerSchema), register);
router.post('/login', validatorSchema(loginSchema),login);
router.post('/logout', logout);
router.get('/profile', authRequired, profile);
