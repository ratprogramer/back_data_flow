import e from "cors";
import { modelos } from "../model/model.js";
//Informes 24 sin 24
export const get24oNo24Pp= async (req, res) => {
  try {
    const resultado = await modelos.get24oNo24Pp();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const get24oNo24Pt= async (req, res) => {
  try {
    const resultado = await modelos.get24oNo24Pt();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const get24oNo24Sb= async (req, res) => {
  try {
    const resultado = await modelos.get24oNo24Sb();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};

export const getNotificaciones= async (req, res) => {
  try {
    const resultado = await modelos.getNotificaciones();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};

//RESULTADO 5 y INCOMPLETOS
export const getResultadosConFecha5d = async (req, res) => {
  //TERMINADA

  try {
    const resultado = await modelos.getResultadosConFecha5d();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getResultadosIncompletos = async (req, res) => {
  //TERMINADA

  try {
    const resultado = await modelos.getResultadosIncompletos();
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};

//Controlador resultado
export const createResultado = async (req, res) => {
  //TERMINADA

  try {
    const resultado = await modelos.createResultado(req.body);
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const updateResultado = async (req, res) => {
  //TERMINADA

  try {
    const resultado = await modelos.updateResultado(req.body);
    if (!resultado.success && resultado.error) {
      res.status(500).json(resultado);
    } else {
      res.status(200).json(resultado);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
//----------------------------------------------------------------
//Saborizacion
export const getSaborizacion = async (req, res) => {
  //TERMINADA

  try {
    const getSaborizacion = await modelos.getAllSaborizacion();
    if (!getSaborizacion.success && getSaborizacion.error) {
      res.status(500).json(getSaborizacion);
    } else {
      res.status(200).json(getSaborizacion);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const createSaborizacion = async (req, res) => {
  //TERMINADA
  try {
    const reqBody = req.body;
    const newSaborizacion = await modelos.createSaborizacion(reqBody);
    if (!newSaborizacion.success && newSaborizacion.error) {
      res.status(500).json(newPP);
    } else if (!newSaborizacion.success) {
      res.status(500).json(newSaborizacion);
    } else {
      res.status(201).json(newSaborizacion);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const updateSaborizacion = async (req, res) => {
  //sin terminar
  try {
    const reqBody = req.body;
    const id = req.params.id;

    const updatedSaborizacion = await modelos.updateSaborizacion(id, reqBody);
    if (!updatedSaborizacion.success && updatedSaborizacion.error) {
      res.status(500).json(updatedSaborizacion);
    } else if (!updatedSaborizacion.success) {
      res.status(500).json(updatedSaborizacion);
    } else {
      res.status(200).json(updatedSaborizacion);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const deleteSaborizacion = async (req, res) => {
  //sin terminar
  try {
    const id = req.params;

    const deletedSaborizacion = await modelos.deleteSaborizacion(id);
    if (!deletedSaborizacion.success && deletedSaborizacion.error) {
      res.status(500).json(deletedSaborizacion);
    } else if (!deletedSaborizacion.success) {
      res.status(500).json(deletedSaborizacion);
    } else {
      res.status(200).json(deletedSaborizacion);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
//----------------------------------------------------------------
//Controlador productos terminado
export const getResultId = async (req, res) => {
  //Obtener pt con nombre asociado a pp
  try {
    const bodyIdes = req.body;
    const getResultId = await modelos.getResultId(bodyIdes);
    if (!getResultId.success && getResultId.error) {
      res.status(500).json(getResultId);
    } else {
      res.status(200).json(getResultId);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getUsuario = async (req, res) => {
  //Obtener nom y rol por id
  try {
    const userId = req.params.id;
    const usuario = await modelos.getUsuarioPorId(userId);

    if (!usuario.success) {
      res.status(500).json(usuario);
    } else {
      res.status(200).json(usuario);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getAllWithPP = async (req, res) => {
  //Obtener pt con nombre asociado a pp
  try {
    const getAllWithPP = await modelos.getAllWithPP();
    if (!getAllWithPP.success && getAllWithPP.error) {
      res.status(500).json(getAllWithPP);
    } else {
      res.status(200).json(getAllWithPP);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getAllPP = async (req, res) => {
  //TERMINADA
  //Controlador productos terminado
  try {
    const allPP = await modelos.getAllPP();
    if (!allPP.success && allPP.error) {
      res.status(500).json(allPP);
    } else {
      res.status(200).json(allPP);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getAllPT = async (req, res) => {
  //TERMINADA
  //Controlador productos terminado
  try {
    const allPT = await modelos.getAllPT();
    if (!allPT.success && allPT.error) {
      res.status(500).json(allPT);
    } else {
      res.status(200).json(allPT);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getAllSB = async (req, res) => {
  //TERMINADA
  //Controlador productos terminado
  try {
    const allSB = await modelos.getAllSB();
    if (!allSB.success && allSB.error) {
      res.status(500).json(allSB);
    } else {
      res.status(200).json(allSB);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const getAllR = async (req, res) => {
  //TERMINADA
  //Controlador Resultados
  try {
    const allR = await modelos.getAllR();
    if (!allR.success && allR.error) {
      res.status(500).json(allR);
    } else {
      res.status(200).json(allR);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
/*
export const getDatePP = async (req, res) => {//sin terminar
  //Controlador productos terminados por fecha
  try {
    const resultDate = await modelos.getOneWorkout(req.params.workoutId);
    res.status(200).json(resultDate);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error obteniendo todos los pp", error: err });
  }
};
*/
export const createNewPP = async (req, res) => {
  //TERMINADA
  try {
    const reqBody = req.body;
    const newPP = await modelos.createNewPP(reqBody);
    if (!newPP.success && newPP.error) {
      res.status(500).json(newPP);
    } else if (!newPP.success) {
      res.status(500).json(newPP);
    } else {
      res.status(201).json(newPP);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const createNewPT = async (req, res) => {
  //TERMINADA
  try {
    const reqBody = req.body;
    const newPT = await modelos.createNewPT(reqBody);
    if (!newPT.success && newPT.error) {
      res.status(500).json(newPT);
    } else if (!newPT.success) {
      res.status(500).json(newPT);
    } else {
      res.status(201).json(newPT);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const createNewR = async (req, res) => {
  //TERMINADA
  try {
    const reqBody = req.body;
    const newR = await modelos.createNewR(reqBody);
    if (!newR.success && newR.error) {
      res.status(500).json(newR);
    } else if (!newR.success) {
      res.status(500).json(newR);
    } else {
      res.status(201).json(newR);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const updatePP = async (req, res) => {
  //sin terminar
  try {
    const reqBody = req.body;
    const id = req.params.id;

    const updatedPP = await modelos.updatePP(id, reqBody);
    if (!updatedPP.success && updatedPP.error) {
      res.status(500).json(updatedPP);
    } else if (!updatedPP.success) {
      res.status(500).json(updatedPP);
    } else {
      res.status(200).json(updatedPP);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const updatePT = async (req, res) => {
  //sin terminar
  try {
    const reqBody = req.body;
    const id = req.params.id;

    const updatedPT = await modelos.updatePT(id, reqBody);

    if (!updatedPT.success && updatedPT.error) {
      res.status(500).json(updatedPT);
    } else if (!updatedPT.success) {
      res.status(500).json(updatedPT);
    } else {
      res.status(200).json(updatedPT);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const deletePP = async (req, res) => {
  //sin terminar
  try {
    const id = req.params;

    const deletedPP = await modelos.deletePP(id);
    if (!deletedPP.success && deletedPP.error) {
      res.status(500).json(deletedPP);
    } else if (!deletedPP.success) {
      res.status(500).json(deletedPP);
    } else {
      res.status(200).json(deletedPP);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
export const deletePT = async (req, res) => {
  //sin terminar
  try {
    const id = req.params.id;

    const deletedPT = await modelos.deletePT(id);
    if (!deletedPT.success && deletedPT.error) {
      res.status(500).json(deletedPT);
    } else if (!deletedPT.success) {
      res.status(500).json(deletedPT);
    } else {
      res.status(200).json(deletedPT);
    }
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error interno", error: err });
  }
};
