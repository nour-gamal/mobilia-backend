import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.ts";
import categoriesRouter from "./routes/category.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/categories", categoriesRouter);

app.listen(PORT, async () => {
	await connectDB();
	console.log(`Server is running on port ${PORT}`);
});
