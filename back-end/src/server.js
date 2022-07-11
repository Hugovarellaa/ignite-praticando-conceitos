const express = require("express");
const route = require("./route");
const path = require("path");

const app = express();

// Setando o view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "../public")));

// Configurando o diretório das views
app.set("views", path.join(__dirname, "./views"));

app.use(route);

app.listen(3000, () => console.log("Server started on port 3333"));
