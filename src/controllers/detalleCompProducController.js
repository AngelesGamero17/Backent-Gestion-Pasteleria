import { detalleCompProducModel } from "../models/detalleCompProducModel.js";

export const getDetalleCompProducto = async (req, res) => {
  try {
    const respuesta = await clienteModel.findAll();
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDetalleCompProducto = async (req, res) => {
  try {
    const {idDeComp,idPro } = req.body;
    //if (detalleCompProduc) {
    //  return res.status(400).json({ message: "detalleCompProduc ya existe" });
    //}
    const nuevodetalleCompProduc = await detalleCompProducModel.create({
      idDeComp,
      idPro

    });
    res.status(201).json({
      message: "detalleCompProduc creado Correctamente",
      data: nuevodetalleCompProduc,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDetalleCompProducto = async (req, res) => {
  try {
    const { idDeComp } = req.params;
    const detalleCompProduc = await detalleCompProducModel.findOne({ where: { idDeComp } });
    if (!detalleCompProduc)
      return res.status(404).json({ message: "detalleCompProduc no encontrado" });
    res.status(200).json(detalleCompProduc);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDetalleCompProducto = async (req, res) => {
  try {
    const { idDeComp } = req.params;
    const detalleCompProduc = await detalleCompProducModel.findOne({ where: { idDeComp } });
    if (!detalleCompProduc)
      return res.status(404).json({ message: "detalleCompProduc no encontrado" });
    await detalleCompProducModel.destroy({ where: { idDeComp } });
    res.status(200).json({ message: "detalleCompProduc eliminado Satisfactoriamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDetalleCompProducto = async (req, res) => {
  try {
    const { idDeComp } = req.params;
    const { idPro } = req.body;
    const detalleCompProduc = await detalleCompProducModel.findOne({ where: { idDeComp} });
    if (!detalleCompProduc)
      return res.status(404).json({ message: "detalleCompProduc no encontrado" });
    await detalleCompProducModel.update({ idDeComp,idPro }, { where: { idDeComp } });
    res.status(200).json({ message: "detalleCompProduc actualizado Correctamente" });
  } catch (error) {
    res.status(500).json(error);
  }
};
