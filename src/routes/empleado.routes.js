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

router.post("/", createEmpleado);

router.get("/:ID", getOneEmpleado);

router.put("/:ID", updateEmpleado);

router.delete("/:ID", deleteEmpleado);

export default router;
