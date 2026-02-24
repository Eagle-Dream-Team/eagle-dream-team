const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static("public", { extensions: ["html"] }));

app.use(cookieParser());

const apiRouter = require("./public-apis.js");
app.use("/apis", apiRouter);


app.listen(port);
console.log("[Server] Success: Listening on port " + port + ".");
