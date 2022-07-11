const express = require("express");
const route = require("./route");

const app = express();
app.use(route);

app.listen(3333, () => console.log("Server started on port 3333"));
