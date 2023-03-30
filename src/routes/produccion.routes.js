import { Router } from "express";
import {
  getProduccion,
  createProduccion,
  getOneProduccion,
  updateProduccion,
  deleteProduccion,
} from "../controllers/produccionController.js";

const router = Router();

router.get("/", getProduccion);

router.post("/", createProduccion);

router.get("/:ID", getOneProduccion);

router.put("/:ID", updateProduccion);

router.delete("/:ID", deleteProduccion);

export default router;