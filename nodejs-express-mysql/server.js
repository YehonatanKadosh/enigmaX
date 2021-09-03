const express = require("express");
const app = express();
const customers = require("./app/routes/customer.routes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Yehonatan's mySQL server" });
});

app.use("/customers", customers);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is Up`);
});
