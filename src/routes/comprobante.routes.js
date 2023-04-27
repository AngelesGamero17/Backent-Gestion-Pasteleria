import { Router } from "express";
import {
  getComprobante,
  createComprobante,
  getOneComprobante,
  updateComprobante,
  deleteComprobante,
} from "../controllers/comprobanteController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getComprobante);

router.post("/",requireToken, createComprobante);

router.get("/:ID", getOneComprobante);

router.put("/:ID", requireToken,updateComprobante);

router.delete("/:ID",requireToken, deleteComprobante);

export default router;