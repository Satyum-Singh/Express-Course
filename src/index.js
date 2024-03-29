const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const groceriesRouter = require("./routes/groceries");
const marketsRouter = require("./routes/markets");

const app = express();
const port = 3001;

// Middleware - it is function which is executed between the request and the response
//            - it is used to modify the request or the response
//            - it is used to execute code before the endpoint is executed
//            - it has 3 parameters (req, res, next) = next function is used to execute the next middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "ijwnvoisneironoewifn",
    resave: false,
    saveUninitialized: false,
  })
);

// Creating a global middleware which is executed for every request
app.use((req, res, next) => {
  console.log(`${req.method} :: ${req.path} :: ${req.ip}`);
  next();
});

app.use("/groceries", groceriesRouter);
app.use("/markets", marketsRouter);

// Creating Server
app.listen(port, () => console.log(`Server running on port ${port}`));
