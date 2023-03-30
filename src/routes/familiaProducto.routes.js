import { Router } from "express";
import {
  getFamiliaProducto,
  createFamiliaProducto,
  getOneFamiliaProducto,
  updateFamiliaProducto,
  deleteFamiliaProducto,
} from "../controllers/familiaProductoController.js";

const router = Router();

router.get("/", getFamiliaProducto);

router.post("/", createFamiliaProducto);

router.get("/:ID", getOneFamiliaProducto);

router.put("/:ID", updateFamiliaProducto);

router.delete("/:ID", deleteFamiliaProducto);

export default router;