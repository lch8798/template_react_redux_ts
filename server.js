const express = require("express");
const app = express();
const cors = require("cors");

// server config
const PORT = 3000;

// middleware
app.use(express.json());
app.use(cors());

// client-side react render
app.use("/", express.static(__dirname + "/build"));
app.get("*", (req, res, next) => {
  if (req.path.split("/")[1] === "static") return next();

  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => {
  console.log(`run node server port: ${PORT}`);
});
