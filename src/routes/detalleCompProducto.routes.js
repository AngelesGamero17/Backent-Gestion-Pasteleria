import { Router } from "express";
import {
  getDetalleCompProducto,
  createDetalleCompProducto,
  getOneDetalleCompProducto,
  updateDetalleCompProducto,
  deleteDetalleCompProducto,
} from "../controllers/detalleCompProducController.js";

const router = Router();

router.get("/", getDetalleCompProducto);

router.post("/", createDetalleCompProducto);

router.get("/:ID", getOneDetalleCompProducto);

router.put("/:ID", updateDetalleCompProducto);

router.delete("/:ID", deleteDetalleCompProducto);

export default router;