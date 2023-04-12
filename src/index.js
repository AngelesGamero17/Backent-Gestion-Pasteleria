import app from "./app.js"
import { sequelize } from "./database/database.js"
import authRouter from "./routes/auth.route.js"

app.use('/api/v1/auth',authRouter)

import"./models/index.js"
app.listen(app.get("port"), async () => {
    try {
        await sequelize.sync({force:false});
        console.log("Database connected");
        console.log("Runing serve on port" , app.get("port"));
        console.log(
            `Connect to server on http://${app.get("host")}:${app.get("port")}`
        )
        
    } catch (error) {
        console.log("Error conneting to databse, error");
        console.error(error);
    }
}
);