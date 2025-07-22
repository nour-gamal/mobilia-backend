import { Router } from "express";
import { Category } from "../models/categories.ts";

const categoriesRouter = Router();

categoriesRouter.get("/", async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json({ data: categories, status: 200 });
	} catch (error) {
		console.error("Error fetching categories:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

categoriesRouter.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: "Category ID is required" });
		}
		const category = await Category.findById(id);
		if (!category) {
			return res.status(404).json({ message: "Category not found" });
		}
		res.status(200).json({ data: category, status: 200 });
	} catch (error) {
		console.error("Error fetching category:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

categoriesRouter.post("/", async (req, res) => {
	try {
		const { name, description } = req.body;
		if (!name) {
			return res.status(400).json({ message: "Name is required" });
		}

		const newCategory = new Category({ name, description });
		await newCategory.save();
		res.status(201).json({ data: newCategory, status: 201 });
	} catch (error) {
		console.error("Error creating category:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});
categoriesRouter.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { name, description } = req.body;
		if (!id) {
			return res.status(400).json({ message: "Category ID is required" });
		} else if (!(name || description)) {
			return res
				.status(400)
				.json({ message: "Please provide Name or description to be updated" });
		}
		const category = await Category.findById(id);
		if (!category) {
			return res.status(404).json({ message: "Category not found" });
		}
		category.name = name;
		category.description = description;
		await category.save();
		res.status(200).json({
			data: category,
			status: 200,
			message: "Category updated successfully",
		});
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
	}
});

categoriesRouter.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		if (!id) {
			res.status(400).send("Please provide a category ID to delete");
		}
		const category = await Category.findByIdAndDelete(id);
		if (!category) {
			return res.status(404).json({ message: "Category not found" });
		} else {
			res.status(200).json({
				message: "Category deleted successfully",
				status: 200,
			});
		}
	} catch (error) {
		res.status(500).json({ message: "Internal server error" });
	}
});
export default categoriesRouter;
