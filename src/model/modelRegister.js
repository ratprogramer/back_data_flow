import { conexion } from "../db/conexion.js";
export function modelRegister(obj){
  console.log(obj);
            
        const sql =
          "INSERT INTO usuarios (dni,nombre,rol,contraseña,email) VALUES (?, ?, ?, ?, ?)";
        const values = [
          obj.dni, 
          obj.nombre,
          obj.rol,
          obj.contraseña,
          obj.email,
        ];
        return conexion.execute(sql, values);
    }