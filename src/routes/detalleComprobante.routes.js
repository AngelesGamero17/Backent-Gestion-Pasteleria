import { Router } from "express";
import {
  getDetalleComprobante,
  createDetalleComprobante,
  getOneDetalleComprobante,
  updateDetalleComprobante,
  deleteDetalleComprobante,
} from "../controllers/detalleComprobanteController.js";

const router = Router();

router.get("/", getDetalleComprobante);

router.post("/", createDetalleComprobante);

router.get("/:ID", getOneDetalleComprobante);

router.put("/:ID", updateDetalleComprobante);

router.delete("/:ID", deleteDetalleComprobante);

export default router;