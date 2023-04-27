import { Router } from "express";
import {
  getFechaProduccion,
  createFechaProduccion,
  getOneFechaProduccion,
  updateFechaProduccion,
  deleteFechaProduccion,
} from "../controllers/fechaProduccionController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getFechaProduccion);

router.post("/",requireToken, createFechaProduccion);

router.get("/:ID", getOneFechaProduccion);

router.put("/:ID", requireToken,updateFechaProduccion);

router.delete("/:ID", requireToken,deleteFechaProduccion);

export default router;