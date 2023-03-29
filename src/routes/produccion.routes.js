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

router.get("/:id", getOneProduccion);

router.put("/:id", updateProduccion);

router.delete("/:id", deleteProduccion);

export default router;