import { Router } from "express";
import { validarAnalista } from "../middleware/validarAnalista.js";
import { validarAdministrador } from "../middleware/validarAdministrador.js";
import {get24oNo24Pp,get24oNo24Pt,get24oNo24Sb,getResultadosConFecha5d,getResultadosIncompletos,createResultado,updateResultado,getSaborizacion,createSaborizacion,updateSaborizacion,deleteSaborizacion,getResultId,getAllWithPP,getAllPP,getAllPT,getAllR,createNewPP,createNewPT,updatePP,updatePT, deletePP, deletePT,createNewR, getNotificaciones, getAllSB} from "../controller/controllers.js";
import { pP,pT,sB,r, parcialPP, rU} from "../middleware/validaciones.js";

export const routerProductos = Router();

routerProductos

//RUTA DE NOTIFICACIONES
  .get("/notificaciones",getNotificaciones)
//Infomes 24 o sin 24
  .get("/muestras_pp_incompletos",get24oNo24Pp)
  .get("/muestras_pt_incompletos",get24oNo24Pt)
  .get("/muestras_sb_incompletos",get24oNo24Sb)
  //Resultados 5d
  .get("/resultados_5d",getResultadosConFecha5d)
  .get("/resultados_incompletos",getResultadosIncompletos)
  //Resultado
  .post("/registrar_resultado",r, createResultado)
  .patch("/registrar_resultado_actualizado",rU, updateResultado)
  //Saborizacion
  .post("/registrar_saborizacion",sB, createSaborizacion)
  .get("/registrar_saborizacion", getSaborizacion)
  .patch("/registrar_saborizacion", updateSaborizacion)
  .delete("/eliminar_saborizacion", deleteSaborizacion)
  //----------------------------------------------------------------

  //Obtener resultados por id 
  .post("/obtenerResultadosId",getResultId)

  //RUTAS DE OBTENER PP,PT Y R TERMINADAS
  .get("/producto_terminado_nom_pp", getAllWithPP)//PT con nombre asociado de pp
  .get("/producto_proceso", getAllPP)
  .get("/producto_terminado", getAllPT)
  .get("/saborizacion", getAllSB)
  .get("/resultado", getAllR)

  //--------------------------------------

  // RUTAS CON VALIDACIONES IMPLEMENTADAS
  .post("/registrar_pp", pP, createNewPP )
  .post("/registrar_pt", pT, createNewPT)
  //------------------------------------------

  //RUTAS DE ELIMINAR 
  .delete("/eliminar_productoP/:id?", deletePP)
  .delete("/eliminar_productoT/:id?", deletePT)
  //-----------------------------------------


  //RUTAS DE ACTUALIZAR 
  .put('/actualizar_pp/:id', parcialPP, updatePP)
  .put('/actualizar_terminado/:id', updatePT)