import { Router } from "express";
import {
  getComprobante,
  createComprobante,
  getOneComprobante,
  updateComprobante,
  deleteComprobante,
} from "../controllers/comprobanteController.js";

const router = Router();

router.get("/", getComprobante);

router.post("/", createComprobante);

router.get("/:ID", getOneComprobante);

router.put("/:ID", updateComprobante);

router.delete("/:ID", deleteComprobante);

export default router;