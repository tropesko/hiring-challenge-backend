const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();
const port = process.env.PORT || 4000;
const db_access =
  "mongodb+srv://admin:l0vehina@cluster0.zqiuc.mongodb.net/usertable?retryWrites=true&w=majority";

mongoose.connect(db_access, () => console.log("Database connected"));

app.use(express.json());
app.use(cors());
app.use(routesUrls);
app.listen(port, () => console.log(`server is up on port ${port}`));
