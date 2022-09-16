import slugify from "slugify";
import Category from "../models/category.js";
import formatCategories from "../utils/category/formatCategories.js";

const createCategory = async (req, res) => {
  try {
    const { name, parentId } = req.body;
    const categoryObj = {
      name,
      slug: slugify(name),
    };
    if (req.file) {
      categoryObj.categoryImage = req.file.filename;
    }
    if (parentId) {
      categoryObj.parentId = parentId;
    }
    const newCategory = new Category(categoryObj);
    const category = await newCategory.save();
    if (!category) {
      throw new Error("Category not created!!");
    }
    return res.status(201).json({ category });
  } catch (error) {
    console.error("createCategory: ", error);
    return res.status(500).json({ message: "Something went wrong!!!" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    if (!categories) {
      throw new Error("Error fetching categories");
    }
    const _categories = formatCategories(categories);
    return res.status(200).json({ categories: _categories });
  } catch (error) {
    console.error("getCategories: ", error);
    return res.status(500).json({ message: "Error fetching categories" });
  }
};

export { createCategory, getCategories };
