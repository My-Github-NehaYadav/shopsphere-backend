const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { productValidation } = require("../validation/user.validation");
const Product = require("../models/product.model");


const createProduct = async (req, res) => {
  const { error } = productValidation.validate(req.body);

  if (error) {
    console.log(error, "kkkkkk");
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  try {
    const product = await Product.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    console.log("Create Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate(
      "category",
      "categoryName"
    );
    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.log("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductById = async (req, res) => {
  const _id = req.params.id;
  try {
    const product = await Product.findById(_id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: product,
    });
  } catch (error) {
    console.log("Get Products Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}


const deleteProduct = async (req, res) => {
  const _id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(_id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("Delete Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  const _id = req.params.id;

  try {
    const product = await Product.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });

  } catch (error) {
    console.log("Update Product Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    const products = await Product.find({ category });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct,
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  getProductsByCategory
};