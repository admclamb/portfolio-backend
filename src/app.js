const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const express = require("express");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const messageRouter = require("./message/message.router");
const { FRONT_END_URL } = process.env;

const app = express();

const corsOptions = {
  origin: FRONT_END_URL,
};

app.use(express.json());
app.use(cors(corsOptions));

app.use("/message", messageRouter);

app.set("trust proxy", 1);
app.use("/api/", (req, res) => res.send(req.ip));
app.use(notFound);
app.use(errorHandler);

module.exports = app;
