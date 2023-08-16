const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");
const paymentRoutes = require("./router/paymentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT);
});
