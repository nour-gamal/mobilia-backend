import { ICategory } from "@interfaces/categories";
import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema<ICategory>(
	{
		stdTitle: { type: String, required: true, unique: true },
		stdDescription: { type: String, default: "" },
		imageSrc: { type: String, default: "" },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	}
);

export const Category = mongoose.model<ICategory>("Category", CategorySchema);
