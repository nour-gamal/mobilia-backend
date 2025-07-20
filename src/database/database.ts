import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const mongoUri = process.env.MONGO_URI;
		if (!mongoUri) {
			throw new Error("❌ MONGO_URI environment variable is not defined.");
		}
		const conn = await mongoose.connect(mongoUri);
		console.log(`✅ MongoDB connected: ${conn.connection.host}`);
	} catch (err) {
		console.error("❌ DB connection error:", err);
		process.exit(1);
	}
};
