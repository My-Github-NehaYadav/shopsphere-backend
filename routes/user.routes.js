const express = require("express");
const router = express.Router();

const { signup, login, createProduct, getProducts, getProductById, deleteProduct, updateProduct } = require("../controllers/user.controller");

router.post("/signup", signup);
router.post('/login', login);

// product APIs 
router.post("/createProduct", createProduct);
router.get("/getProduct", getProducts);
router.get("/product/:id", getProductById);
router.delete("/product/:id", deleteProduct);
router.put("/product/:id", updateProduct);

module.exports = router;