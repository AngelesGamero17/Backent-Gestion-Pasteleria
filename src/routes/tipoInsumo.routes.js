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

router.get("/:ID", getOneTipoInsumo);

router.put("/:ID", updateTipoInsumo);

router.delete("/:ID", deleteTipoInsumo);

export default router;