import { comprobanteModel } from "../models/comprobanteModel.js";

export const getComprobante = async (req, res) => {
  try {
    const respuesta = await comprobanteModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createComprobante = async (req, res) => {
  try {
    const { ID,empleado,fechaComp,cliente,estadoComp,detalleComprobante } = req.body;
    //if (comprobante) {
    //  return res.status(400).json({ message: "Comprobante ya existe" });
    //}
    const nuevoComprobante = await comprobanteModel.create({
      ID,
      empleado,
      fechaComp,
      cliente,
      estadoComp,
      detalleComprobante
    });
    res.status(201).json({
      message: "Comprobante creado Correctamente",
      data: nuevoComprobante,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const comprobante = await comprobanteModel.findOne({ where: { ID } });
    if (!comprobante)
      return res.status(404).json({ message: "Comprobante no encontrado" });
    res.status(200).json(comprobante);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const comprobante = await clienteModel.findOne({ where: { ID } });
    if (!comprobante)
      return res.status(404).json({ message: "Comprobante no encontrado" });
    await comprobanteModel.destroy({ where: { ID } });
    res.status(200).json({ message: "Comprobante eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const { empleado,fechaComp,cliente,estadoComp,detalleComprobante } = req.body;
    const comprobante = await comprobanteModel.findOne({ where: { ID } });
    if (!comprobante)
      return res.status(404).json({ message: "Comprobante no encontrado" });
    await comprobanteModel.update({ empleado,fechaComp,cliente,estadoComp,detalleComprobante}, { where: { ID } });
    res.status(200).json({ message: "Comprobante actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

