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

router.get("/:id", getOneDetalleComprobante);

router.put("/:id", updateDetalleComprobante);

router.delete("/:id", deleteDetalleComprobante);

export default router;