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

router.get("/:ID", getOneInsumo);

router.put("/:ID", updateInsumo);

router.delete("/:ID", deleteInsumo);

export default router;