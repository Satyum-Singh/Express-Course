const { Router } = require("express");
const router = Router();

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
  {
    item: "Banana",
    quantity: 5,
  },
];

// GET Request
router.get(
  "/",
  //   Applying middleware to the endpoint
  (req, res, next) => {
    console.log("Before handling request");
    next();
  },
  (req, res, next) => {
    res.send(groceries);
  }
);

// Route Parameters
router.get("/:item", (req, res) => {
  const { item } = req.params;
  const grocery = groceries.find((grocery) => grocery.item === item);
  res.send(grocery);
});

// POST Request
router.post("/", (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201);
});

module.exports = router;
