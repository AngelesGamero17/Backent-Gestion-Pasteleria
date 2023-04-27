import { Router } from "express";
import {
  getProduccion,
  createProduccion,
  getOneProduccion,
  updateProduccion,
  deleteProduccion,
} from "../controllers/produccionController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getProduccion);

router.post("/",requireToken,createProduccion);

router.get("/:ID", getOneProduccion);

router.put("/:ID",requireToken, updateProduccion);

router.delete("/:ID",requireToken, deleteProduccion);

export default router;