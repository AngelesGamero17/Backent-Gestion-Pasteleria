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

router.get("/:id", getOneComprobante);

router.put("/:id", updateComprobante);

router.delete("/:id", deleteComprobante);

export default router;