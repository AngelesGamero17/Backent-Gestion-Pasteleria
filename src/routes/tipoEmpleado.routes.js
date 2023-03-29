import { Router } from "express";
import {
  getTipoEmpleado,
  createTipoEmpleado,
  getOneTipoEmpleado,
  updateTipoEmpleado,
  deleteTipoEmpleado,
} from "../controllers/tipoEmpleadoController.js";

const router = Router();

router.get("/", getTipoEmpleado);

router.post("/", createTipoEmpleado);

router.get("/:id", getOneTipoEmpleado);

router.put("/:id", updateTipoEmpleado);

router.delete("/:id", deleteTipoEmpleado);

export default router;