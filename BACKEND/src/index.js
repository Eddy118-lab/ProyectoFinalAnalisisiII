import app from "./app.js";
import db from "./database/db.js";

db.authenticate()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((error) => console.log(`Error de conexión: ${error}`));


app.listen(8000, () => {
    console.log('El servidor está corriendo en http://localhost:8000/');
});