import express from "express";
import path from "path";
import bodyParser from "body-parser";
import "dotenv/config";

import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";
import customerRouter from "./routes/customerRoutes.js";
import userRouter from "./routes/userRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// EJS Layouts setup
app.use(expressEjsLayouts);
app.set("layout", "layouts/main");
app.set("layout extractScripts", true);
app.set("layout extractStyle", true);

//Static Files
app.use(express.static(path.join(__dirname, "public")));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Auth
function basicAuth(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.header("WWW-Authenticate", 'Basic realm="Secure Area"');
    return res.status(401).json({ message: "Authenticate required" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString(
    "ascii"
  );
  const [username, password] = credentials.split(":");
}

// Routes
app.use("/customer", customerRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "Index", message: "This is message" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
