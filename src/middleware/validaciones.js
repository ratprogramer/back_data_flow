import { validarNewPP, validarPPParcial } from "../schemas/productoP.js";
import { validarNewPT } from "../schemas/productoT.js";
import { validarNewR } from "../schemas/resultado24.js";
import { validarNewRUpdate } from "../schemas/resultado5.js";
import { validarNewSB } from "../schemas/saborizacion.js";


export function pP(req, res, next) {
  try {
    const body = validarNewPP(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}
export function pT(req, res, next) {
  try {
    const body = validarNewPT(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}
export function sB(req, res, next) {
  try {
    const body = validarNewSB(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}
export function r(req, res, next) {
  try {
    const body = validarNewR(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}
export function rU(req, res, next) {
  try {
    const body = validarNewRUpdate(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}
export function parcialPP(req, res, next) {
  try {
    const body = validarPPParcial(req.body);
    if (body.error) {
      return res.status(422).json({
        status: false,
        message: "Parametos es invalidos",
        error: body.error,
      });
    } else {
      next();
    }
  } catch (e) {
    console.log("Error en los parametros" + e.message);
    return res
      .status(500)
      .json({ status: false, message: "Error interno del servidor", error: e.message });
  }
}