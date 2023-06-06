const express = require("express");
const app = express();
const port = 3000;

//Template engine:
app.set("view engine", "pug");
app.set("views", "./views");

//Middlewares:
app.use(express.json());

//Public folder:
app.use(express.static("public"));

//Modules required:
let importedRouter = require("./routes/routes.js")

//Routes:
app.use("/", importedRouter);

//"Listener":
app.listen(port, () => {
    console.log(`***Example app listening on port http://localhost:${port}***`);
})