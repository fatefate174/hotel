const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");

app.use(express.json());

//load env
dotenv.config({ path: "./config/config.env" });

//connect to the database
connectDB();
console.log("Current Time:", new Date()); // Output will be in IST

//Route files
const routes = require("./routes");

//Mount routers
app.use("", routes);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server running in ${process.env.PORT}`));
