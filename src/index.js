import app from "./app.js"
import { sequelize } from "./database/database.js"
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
        console.log("Error conneting to database, error");
        console.error(error);
    }
}

);



/* import app from "./app.js";
import { Sequelize } from "sequelize";

import "./models/index.js";

const sequelize = new Sequelize('dbpasteleria', 'pasteleria', 'pasteleria1.', {
  host: 'db',
  dialect: 'postgres',
});

// ...

app.listen(app.get("port"), async () => {
    try {
      await sequelize.authenticate(); // Verifica la conexión a la base de datos
      console.log("Database connected");
  
      await sequelize.sync({ force: false }); // Sincroniza los modelos
      console.log("Models synchronized");
  
      console.log("Running server on port", app.get("port"));
      console.log(`Connect to server on http://${app.get("host")}:${app.get("port")}`);
    } catch (error) {
      console.log("Error connecting to database or synchronizing models:", error);
      console.error(error);
    }
  });
   */