import { Router } from "express";
import { login, registrar } from "../controllers/authController.js";
import {body} from "express-validator";
import { validationResultExpress } from "../middlewares/validatorResultExpress.js";
const router = Router();

router.post(
    "/registrar",
    [ body("email","formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password","minimo 6 caracteres")
        .trim()
        .isLength({min:6}),
    body("password","formato de pasword incorrecto")
        .custom((value,{req}) =>{
            if(value !== req.body.repassword){
                throw new Error("NO coinciden las contraseñas");
            }
            return value;
        }
        ),
    ],
    validationResultExpress,
    registrar
);

router.post(
    "/login",
    [ 
         body("email","formato de email incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password","minimo 6 caracteres")
            .trim()
            .isLength({min:6}),
    ],
    validationResultExpress,
    login);

export default router;