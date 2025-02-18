import express from "express";
import apiroutes from "./routes.js"; // Ensure the correct path to your routes file
import { GlobalErrorHandler } from "./middlewares/GlobalErrorHandler.js";
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests (if needed)
app.use(express.json());

app.get("/", (_, res) => res.send("Hello World!"));

// ✅ Register API Routes BEFORE Swagger UI
app.use("/api", apiroutes);

app.use(GlobalErrorHandler.handleErrors);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
