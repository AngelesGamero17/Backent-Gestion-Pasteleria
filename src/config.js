import dotenv from "dotenv"

dotenv.config();

export default{
    APP_PORT : process.env.APP_PORT || 5432,
    APP_HOST : process.env.APP_HOST || "localhost"
};