const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server running on port ${port}`));

const groceries = [
  {
    item: "Hot CHocolate",
    quantity: 3,
  },
  {
    item: "Kaffee",
    quantity: 1,
  },
  {
    item: "Milch",
    quantity: 2,
  },
];

app.get("/groceries", (req, res) => {
  res.send(groceries);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201);
});
