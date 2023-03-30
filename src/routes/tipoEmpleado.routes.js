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

router.get("/:ID", getOneTipoEmpleado);

router.put("/:ID", updateTipoEmpleado);

router.delete("/:ID", deleteTipoEmpleado);

export default router;