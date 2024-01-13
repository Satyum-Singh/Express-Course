const express = require("express");
const groceriesRouter = require("./routes/groceries");

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

app.use('/groceries',groceriesRouter);

// Creating Server
app.listen(port, () => console.log(`Server running on port ${port}`));




