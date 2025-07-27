import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.ts";
import categoriesRouter from "./routes/category.ts";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// ...existing code...
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use("/api/categories", categoriesRouter);

app.listen(PORT, async () => {
	await connectDB();
	console.log(`Server is running on port ${PORT}`);
});
