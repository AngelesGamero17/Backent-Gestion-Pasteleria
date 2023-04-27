import { Router } from "express";
import {
  getDetalleComprobante,
  createDetalleComprobante,
  getOneDetalleComprobante,
  updateDetalleComprobante,
  deleteDetalleComprobante,
} from "../controllers/detalleComprobanteController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getDetalleComprobante);

router.post("/",requireToken, createDetalleComprobante);

router.get("/:ID",getOneDetalleComprobante);

router.put("/:ID",requireToken,updateDetalleComprobante);

router.delete("/:ID", requireToken,deleteDetalleComprobante);

export default router;