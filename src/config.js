import dotenv from "dotenv"

dotenv.config();

export default{
    // server config
    APP_PORT : process.env.APP_PORT || 5000,
    APP_HOST : process.env.APP_HOST || "localhost",
    //database config
    DB_NAME : process.env.DB_NAME || "pasteleria",
    DB_USER: process.env.DB_USER ||  "pasteleria",
    DB_PASS: process.env.DB_PASS ||  "password123.",
    DB_HOST: process.env.DB_HOST || "cho",
    
    
    API_VERSION:process.env.API_VERSION || 'v1',
    JWT_SECRET:'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'


};