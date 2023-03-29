import { Router } from "express";
import {
  getProducto,
  createProducto,
  getOneProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/productoController.js";

const router = Router();

router.get("/", getProducto);

router.post("/", createProducto);

router.get("/:id", getOneProducto);

router.put("/:id", updateProducto);

router.delete("/:id", deleteProducto);

export default router;