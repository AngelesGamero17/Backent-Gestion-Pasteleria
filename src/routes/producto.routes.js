import { Router } from "express";
import {
  getProducto,
  createProducto,
  getOneProducto,
  updateProducto,
  deleteProducto,
} from "../controllers/productoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getProducto);

router.post("/", requireToken,createProducto);

router.get("/:ID", getOneProducto);

router.put("/:ID",requireToken, updateProducto);

router.delete("/:ID",requireToken, deleteProducto);

export default router;