import { Router } from "express";
import {
  getInsumo,
  createInsumo,
  getOneInsumo,
  updateInsumo,
  deleteInsumo,
} from "../controllers/insumoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getInsumo);

router.post("/",requireToken, createInsumo);

router.get("/:ID",getOneInsumo);

router.put("/:ID",requireToken ,updateInsumo);

router.delete("/:ID",requireToken, deleteInsumo);

export default router;