import { Router } from "express";
import {
  getFamiliaProducto,
  createFamiliaProducto,
  getOneFamiliaProducto,
  updateFamiliaProducto,
  deleteFamiliaProducto,
} from "../controllers/familiaProductoController.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.get("/", getFamiliaProducto);

router.post("/",requireToken, createFamiliaProducto);

router.get("/:ID", getOneFamiliaProducto);

router.put("/:ID",requireToken, updateFamiliaProducto);

router.delete("/:ID", requireToken,deleteFamiliaProducto);

export default router;