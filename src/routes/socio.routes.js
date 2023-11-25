import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import {
  getSocio,
  getSocios,
  updateSocio,
  deleteSocio,
  createSocio,
} from "../controllers/socio.controller.js";
import { createSocioSchema } from "../schemas/task.schema.js";
const router = Router();

router.get("/socios", authRequired, getSocios);
router.get("/socios/:id", authRequired, getSocio);
router.post(
  "/socio",
  authRequired,
  validatorSchema(createSocioSchema),
  createSocio
);
router.delete("/socios/:id", authRequired, deleteSocio);
router.put("/socios/:id", authRequired, updateSocio);

export default router;
