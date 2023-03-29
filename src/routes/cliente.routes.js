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

router.get("/:id", getOneCliente);

router.put("/:id", updateCliente);

router.delete("/:id", deleteCliente);

export default router;