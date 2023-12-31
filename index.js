require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { menRouter } = require("./route/routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Welcome To HomePage");
}); 

app.use("/men",menRouter)

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DataBase");
  } catch (error) {
    console.log(error); 
    console.log("Couldn't connect to DataBase");
  }
  console.log(`Server running on port ${process.env.port}`);
});
