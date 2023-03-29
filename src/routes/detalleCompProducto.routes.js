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

router.get("/:id", getOneDetalleCompProducto);

router.put("/:id", updateDetalleCompProducto);

router.delete("/:id", deleteDetalleCompProducto);

export default router;