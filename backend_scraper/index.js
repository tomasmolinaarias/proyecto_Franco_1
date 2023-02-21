require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/mongo");

const express = require("express");

const path = require("path");
const routes = require("./routes");
const middlewares = require("./middlewares");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes.load(app);
middlewares.load(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`puerto 🟢 📤 http://localhost:${PORT}`));

dbConnect();
