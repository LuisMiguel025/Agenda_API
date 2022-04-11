import express from "express";
import morgan from "morgan";
// Routes
import contactRoutes from "./routes/contact.routes";

const app = express();

// Settings
app.set("port", 4000);

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

export default app;
