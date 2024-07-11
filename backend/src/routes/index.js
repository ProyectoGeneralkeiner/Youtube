import {Router} from "express";
import rutaCanal from "./routes.rutaCanal.js";

const ruta = Router();

ruta.use("/", rutaCanal);

export default ruta;