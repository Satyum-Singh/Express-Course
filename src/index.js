const express = require("express");
const app = express();
const port = 3001;

// Middleware - it is function which is executed between the request and the response
//            - it is used to modify the request or the response
//            - it is used to execute code before the endpoint is executed
//            - it has 3 parameters (req, res, next) = next function is used to execute the next middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Creating a global middleware which is executed for every request
app.use((req, res, next) => {
  console.log(`${req.method} :: ${req.path} :: ${req.ip}`);
  next();
});

// Creating Server
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

// GET Request
app.get(
  "/groceries",
  //   Applying middleware to the endpoint
  (req, res, next) => {
    console.log("Before handling request");
    next();
  },
  (req, res, next) => {
    res.send(groceries);
  }
);

// POST Request
app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceries.push(req.body);
  res.send(201);
});
