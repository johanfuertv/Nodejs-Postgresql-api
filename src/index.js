import express from "express";
import userRoutes from './routes/routes.index.js'; // Cambiado aquí

const app = express();

//middlewares
app.use(express.json());
// Routes
app.use(userRoutes); // Cambiado aquí
app.use(express.urlencoded({extended: true}));
//app.use(require("./routes/routes.index"));
app.listen(3000);
console.log("listening on port 3000");