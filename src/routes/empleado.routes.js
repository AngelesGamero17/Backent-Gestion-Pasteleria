import { Router } from "express";
import {
  getEmpleado,
  createEmpleado,
  getOneEmpleado,
  updateEmpleado,
  deleteEmpleado
} from "../controllers/empleadoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getEmpleado);

router.post("/",createEmpleado);

router.get("/:ID", getOneEmpleado);

router.put("/:ID",requireToken, updateEmpleado);

router.delete("/:ID",requireToken, deleteEmpleado);

export default router;
