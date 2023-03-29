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

router.get("/:id", getOneFamiliaProducto);

router.put("/:id", updateFamiliaProducto);

router.delete("/:id", deleteFamiliaProducto);

export default router;