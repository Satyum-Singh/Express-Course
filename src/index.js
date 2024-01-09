const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/groceries", (req, res) => {
  res.send([
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
  ]);
});
