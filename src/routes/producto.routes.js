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

router.get("/:ID", getOneProducto);

router.put("/:ID", updateProducto);

router.delete("/:ID", deleteProducto);

export default router;