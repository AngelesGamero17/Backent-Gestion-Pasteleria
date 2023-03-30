import { Router } from "express";
import {
  getFechaProduccion,
  createFechaProduccion,
  getOneFechaProduccion,
  updateFechaProduccion,
  deleteFechaProduccion,
} from "../controllers/fechaProduccionController.js";

const router = Router();

router.get("/", getFechaProduccion);

router.post("/", createFechaProduccion);

router.get("/:ID", getOneFechaProduccion);

router.put("/:ID", updateFechaProduccion);

router.delete("/:ID", deleteFechaProduccion);

export default router;