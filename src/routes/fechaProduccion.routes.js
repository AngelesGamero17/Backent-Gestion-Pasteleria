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

router.get("/:id", getOneFechaProduccion);

router.put("/:id", updateFechaProduccion);

router.delete("/:id", deleteFechaProduccion);

export default router;