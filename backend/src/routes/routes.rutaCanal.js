import {Router} from "express";

const rutaCanal = Router();
rutaCanal.get("/", (req, res) => {
    res.json({"application": "Youtube"})
});

rutaCanal.get("/canal", (req, res) => {
    res.json({
        "msg": "Hola mundo",
         "user": "Keiner",
         "application": "Youtube",
         "type": "backend"
    });
})
export default rutaCanal;