import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3200;
//instancié express
const app = express();
// parametrer notre server pour lire json
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}`);
});
