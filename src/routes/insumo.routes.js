import { Router } from "express";
import {
  getInsumo,
  createInsumo,
  getOneInsumo,
  updateInsumo,
  deleteInsumo,
} from "../controllers/insumoController.js";

const router = Router();

router.get("/", getInsumo);

router.post("/", createInsumo);

router.get("/:id", getOneInsumo);

router.put("/:id", updateInsumo);

router.delete("/:id", deleteInsumo);

export default router;