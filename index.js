const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const live_url = process.env.MONGODB_URI;

mongoose
  .connect(live_url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection Error: ", err));
  
const app = express();

app.use(cors());
app.use(express.json());
app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});