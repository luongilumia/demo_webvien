const express = require("express");
const cors = require("cors");
const contactRoutes = require("./routes/contact");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Định tuyến
app.use("/api", contactRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
