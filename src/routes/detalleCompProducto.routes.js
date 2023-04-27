import { Router } from "express";
import {
  getDetalleCompProducto,
  createDetalleCompProducto,
  getOneDetalleCompProducto,
  updateDetalleCompProducto,
  deleteDetalleCompProducto,
} from "../controllers/detalleCompProducController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getDetalleCompProducto);

router.post("/",requireToken ,createDetalleCompProducto);

router.get("/:ID", getOneDetalleCompProducto);

router.put("/:ID",requireToken, updateDetalleCompProducto);

router.delete("/:ID",requireToken, deleteDetalleCompProducto);

export default router;