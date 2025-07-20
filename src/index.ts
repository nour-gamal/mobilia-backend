import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/database.ts";
// import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
// app.get("/api", routes);

app.listen(PORT, async () => {
	await connectDB();
	console.log(`Server is running on port ${PORT}`);
});
