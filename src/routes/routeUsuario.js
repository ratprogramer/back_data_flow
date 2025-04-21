import { Router } from "express"
import { register } from "../controller/controllerRegister.js";
import { login } from "../controller/controllerLogin.js";
import { getUsersControllers } from "../controller/controllerUsers.js";
import { validarAdministrador } from "../middleware/validarAdministrador.js";
export const routerUsuarios = Router()

routerUsuarios
  //RUTA PARA REGISTRARSE
  //.post("/register", validarAdministrador, register)
  .post("/register", register)
  //RUTA PARA LOGIN 
  .post("/login", login)
  .get("/usuarios", getUsersControllers)