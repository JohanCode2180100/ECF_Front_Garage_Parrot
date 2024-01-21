const express = require("express");

let app = express();

app.use(express.static(__dirname + "/dist/garage-parrot"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "dist/garage-parrot/index.html");
});

app.listen(process.env.PORT || 8080);
