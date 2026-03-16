const express = require("express");
require("dotenv").config();

const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/api", taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
