import express from "express";
import dotenv from "dotenv";
import { routerProductos } from "./src/routes/routeProductos.js";
import { routerUsuarios } from "./src/routes/routeUsuario.js";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
app.use("/", routerUsuarios);
app.use("/producto", routerProductos);
app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`listening on port ${port}`);
  }
});
 