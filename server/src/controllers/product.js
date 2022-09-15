import Product from "../models/product.js";
import slugify from "slugify";

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, quantity } = req.body;
    const productPictures = [];
    req?.files?.forEach((file) => {
      productPictures.push({ img: file.filename });
    });
    const createdBy = req.user._id;
    const newProduct = new Product({
      name,
      slug: slugify(name),
      price,
      description,
      productPictures,
      category,
      quantity,
      createdBy,
    });

    const product = await newProduct.save();
    if (!product) throw new Error("Product not created");
    return res.status(201).json({ product });
  } catch (error) {
    console.error("createProduct: ", error);
    return res.status(500).json({ message: "Error creating product" });
  }
};

export { createProduct };
