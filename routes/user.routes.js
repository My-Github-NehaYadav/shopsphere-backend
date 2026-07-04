const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/user.controller");
const { createProduct, getProducts, getProductById, deleteProduct, updateProduct, getProductsByCategory } = require("../controllers/product.controller");
const { createCategory, getAllCategories, getCategoryById } = require("../controllers/category.controller");

router.post("/signup", signup);
router.post('/login', login);

// product APIs 
router.post("/createProduct", createProduct);
router.get("/getProduct", getProducts);
router.get("/product/:id", getProductById);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);
router.get("/category/:category", getProductsByCategory);

// category APIs
router.post("/createCategory", createCategory);
router.get("/getAllCategories", getAllCategories);
router.get("/category/:id", getCategoryById); 

module.exports = router;