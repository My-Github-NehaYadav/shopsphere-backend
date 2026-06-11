const express = require("express");
const router = express.Router();

const { signup, login, createProduct, getProducts } = require("../controllers/user.controller");

router.post("/signup", signup);
router.post('/login', login);

// product APIs 
router.post("/createProduct", createProduct);
router.get("/getProduct", getProducts);

module.exports = router;