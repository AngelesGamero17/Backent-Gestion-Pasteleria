import { Router } from "express";
import {
  getCliente,
  createCliente,
  getOneCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController.js";

const router = Router();

router.get("/", getCliente);

router.post("/", createCliente);

router.get("/:ID", getOneCliente);

router.put("/:ID", updateCliente);

router.delete("/:ID", deleteCliente);

export default router;