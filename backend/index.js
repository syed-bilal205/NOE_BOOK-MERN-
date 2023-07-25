require("dotenv").config();
const express = require("express");
const db = require("./database/db");
const cors = require("cors");
const booksRoutes = require("./routes/Books");

// VARIABLES
const app = express();
const PORT = process.env.PORT || 5000;

// DATABASE CONNECTION
db();

// CORS TO CONNECT FRONTEND WITH BACKEND
app.use(cors());

// BASIC MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/books", booksRoutes);

// SERVER STARTED
app.listen(PORT, () => {
  console.log(`server started at the port http://localhost:${PORT}`);
});
