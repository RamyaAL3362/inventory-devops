const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://localhost:27017/inventoryDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});