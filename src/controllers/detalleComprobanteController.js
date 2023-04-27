import { detalleComprobanteModel } from "../models/detalleComprobanteModel.js";

export const getDetalleComprobante = async (req, res) => {
  try {
    const respuesta = await detalleComprobanteModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDetalleComprobante = async (req, res) => {
  try {
    const { ID,producto,fechaProduccion,estado } = req.body;
    //if (detalleComprobante) {
    //  return res.status(400).json({ message: "detalleComprobante ya existe" });
    //}
    const nuevodetalleComprobante = await detalleComprobanteModel.create({
      ID,
      producto,
      fechaProduccion,
      estado
    });
    res.status(201).json({
      message: "detalleComprobante creado Correctamente",
      data: nuevodetalleComprobante,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDetalleComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const detalleComprobante = await detalleComprobanteModel.findOne({ where: { ID } });
    if (!detalleComprobante)
      return res.status(404).json({ message: "detalleComprobante no encontrado" });
    res.status(200).json(detalleComprobante);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDetalleComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const detalleComprobante = await detalleComprobanteModel.findOne({ where: { ID } });
    if (!detalleComprobante)
      return res.status(404).json({ message: "destalleComprobante no encontrado" });
    await detalleComprobanteModel.destroy({ where: { ID } });
    res.status(200).json({ message: "detalleComprobante eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDetalleComprobante = async (req, res) => {
  try {
    const { ID } = req.params;
    const { producto,fechaProduccion,estado } = req.body;
    const detalleComprobante = await detalleComprobanteModel.findOne({ where: { ID } });
    if (!detalleComprobante)
      return res.status(404).json({ message: "detalleComprobante no encontrado" });
    await detalleComprobanteModel.update({  producto,fechaProduccion,estado}, { where: { ID } });
    res.status(200).json({ message: "detalleComprobante actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

