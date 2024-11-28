require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

require("./utils/db");

//Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`));