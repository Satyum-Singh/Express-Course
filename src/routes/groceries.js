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
    res.cookie("Visited", true, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.send(groceries);
  }
);

// Route Parameters
router.get("/:item", (req, res) => {
  console.log(req.cookies);
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

router.get("/shopping/cart", (req, res) => {
  const { cart } = req.session;
  if (!cart) res.send("You have no items in your cart");
  res.send(cart);
});
router.post("/shopping/cart/item", (req, res) => {
  const { item, quantity } = req.body;
  const cartItem = {
    item,
    quantity,
  };
  const { cart } = req.session;
  if (cart) {
    req.session.cart.items.push(cartItem);
  } else {
    req.session.cart = {
      items: [cartItem],
    };
  }
  res.send(201);
});

module.exports = router;
