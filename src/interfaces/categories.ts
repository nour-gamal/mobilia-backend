import { Document } from "mongoose";

export interface ICategory extends Document {
	stdTitle: string;
	stdDescription?: string;
	imageSrc?: string;
	createdAt: Date;
	updatedAt: Date;
}
