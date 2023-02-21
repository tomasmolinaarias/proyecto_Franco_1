const express = require("express");
const {
  createProduct,
  getProducts,
  manyProducts,
  automatic,
  deleteProducts,
  GetScarping,
  postScraping,
} = require("../controller/products");

/* const { onlyProduct } = require("../middlewares/products"); */

const router = express.Router();

// leer datebase

router.get("/product", getProducts);

//hacer scraping y leerlo

router.get("/scraping", GetScarping);

//mandar un producto

router.post("/product", createProduct);

//mandar varios productos

router.post("/products", manyProducts);

// automatización con cron hace scraping y manda producto a DB

router.get("/cron", automatic);

//mandar datos de scraping una ves

router.post("/post-scraping", postScraping);

//borra todos los datos de date base

router.delete("/products", deleteProducts);

module.exports = router;
