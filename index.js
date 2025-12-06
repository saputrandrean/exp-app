import express from "express";
import "dotenv/config";
import customerRouter from "./src/routes/customerRoutes.js";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "ejs");

app.use(express.json());

app.use("/company", customerRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
