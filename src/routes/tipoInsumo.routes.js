import { Router } from "express";
import {
  getTipoInsumo,
  createTipoInsumo,
  getOneTipoInsumo,
  updateTipoInsumo,
  deleteTipoInsumo,
} from "../controllers/tipoInsumoController.js";

const router = Router();

router.get("/", getTipoInsumo);

router.post("/", createTipoInsumo);

router.get("/:id", getOneTipoInsumo);

router.put("/:id", updateTipoInsumo);

router.delete("/:id", deleteTipoInsumo);

export default router;