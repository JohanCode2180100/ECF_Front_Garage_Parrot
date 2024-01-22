const express = require("express");
const path = require("path");

let app = express();

app.use(express.static(__dirname + "/dist/garage-parrot"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "dist/garage-parrot/index.html"));
});

app.listen(process.env.PORT || 8080);
