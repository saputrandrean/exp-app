const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the views directory (where your .ejs files will be)
app.set("views", "./views");

// Define a route to render an EJS template
app.get("/", (req, res) => {
  const data = {
    title: "My Express EJS App",
    message: "Welcome to the EJS tutorial!",
  };
  res.render("index", data); // Renders views/index.ejs and passes data
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
