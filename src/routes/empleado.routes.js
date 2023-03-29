import { Router } from "express";
import {
  getEmpleado,
  createEmpleado,
  getOneEmpleado,
  updateEmpleado,
  deleteEmpleado
} from "../controllers/empleadoController.js";

const router = Router();

router.get("/", getEmpleado);

router.post("/", uploadEmpleado, createEmpleado);

router.get("/:id", getOneEmpleado);

router.put("/:id", updateEmpleado);

router.delete("/:id", deleteEmpleado);

export default router;
