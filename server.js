const express = require("express");
const cookieParser = require("cookie-parser");

// The app constant is where all our express functionalities are centralized.
const app = express();

const port = process.env.PORT ?? 3000;

// The middleware express.json is for automatically parsing request bodies into JSON.
app.use(express.json());

// The 
app.use(express.static("public", { extensions: ["html"] }));

app.use(cookieParser());

const apiRouter = require("./public-apis.js");
app.use("/apis", apiRouter);

app.listen(port);
console.log("[Server] Success: Listening on port " + port + ".");
