
import { validarLogin } from "../schemas/login.js";
import { generateToken  } from "../helpers/generateToken.js";
import { serviceUser } from "../services/servicesU.js";
import dotenv from 'dotenv';
dotenv.config();
// import cookieParser from 'cookie-parser';
// app.use(cookieParser());

export let login = async (req, res) => {
  let result = validarLogin(req.body);
  
  if (result.error) {
    return res.status(400).json({ success: false, message: "Error de validacion", error: result.error});
  } else {
    let { dni, contraseña } = req.body;
    let usuario = {
      dni: dni,
      contraseña: contraseña,
    };
    const result = await serviceUser.login(usuario);
    
    if (result.success) {
      let resultToken = "";
      if(result.rol == "Analista"){
        console.log(result);
        
        resultToken = generateToken({ id: result.id, rol:result.rol, nombre: result.nombre}, process.env.KEY_ANALISTA);
        
      }else{
        resultToken = generateToken({ id: result.id, rol:result.rol, nombre: result.nombre}, process.env.KEY_ADMINISTRADOR);
      }

      return res
        .status(200)
        .json({ success: true, message: "Inicio de sesion exitoso", result: resultToken})
        
    } else {
      return res
        .status(401)
        .json({ success: false, message: "El Dni o la contraseña es invalida"});
    }
  }
};