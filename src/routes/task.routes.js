import { Router } from "express";
import { authRequired } from "../middlewares/validateToken";

const router = Router()

router.get("/tasks", authRequired, )
router.get("/tasks/:id", authRequired, )
router.post("/tasks", authRequired, )
router.delete("/tasks/:id", authRequired, )
router.put("/tasks/:id", authRequired, )