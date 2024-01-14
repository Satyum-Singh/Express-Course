const { Router } = require("express");
const router = Router();

const supermarkets = [
  {
    id: 1,
    store: "Walmart",
    mile: 3,
  },
  {
    id: 2,
    store: "Target",
    mile: 2,
  },
  {
    id: 3,
    store: "Amartex",
    mile: 4,
  },
  {
    id: 4,
    store: "Seven-11",
    mile: 5,
  },
];

// GET Request
router.get("/", (req, res) => {
  const { mile } = req.query;
  const parsedMile = parseInt(mile);
  if (!isNaN(parsedMile)) {
    const filteredMiles = supermarkets.filter((s) => s.mile <= parsedMile);
    res.send(filteredMiles);
  }
  res.send(supermarkets);
});

module.exports = router;


