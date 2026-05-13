const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const live_url =
  "mongodb://iyaselealfred007_db_user:Iregbe007@ac-ygubdtu-shard-00-00.2o8zfda.mongodb.net:27017,ac-ygubdtu-shard-00-01.2o8zfda.mongodb.net:27017,ac-ygubdtu-shard-00-02.2o8zfda.mongodb.net:27017/userDB?ssl=true&replicaSet=atlas-148kif-shard-0&authSource=admin&appName=Cluster0";
// const live_url =
  // "mongodb+srv://iyaselealfred007_db_user:Iregbe007@cluster0.2o8zfda.mongodb.net/userDB?appName=Cluster0";
const local_url = "mongodb://localhost:27017/userDB";
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
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});