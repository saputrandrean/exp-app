import express from "express";
import customerRouter from "./src/routes/customerRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Set the views directory (where your .ejs files will be)
// app.set("views", join(, "views"));

// Define a route to render an EJS template
app.get("/", (req, res) => {
  const data = {
    title: "My Express EJS App",
    message: "Welcome to the EJS tutorial!",
  };
  res.render("index", data); // Renders views/index.ejs and passes data
});

app.use("/companies", customerRouter);

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
