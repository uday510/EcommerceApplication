const productController = require("../controllers/product.controller");

module.exports = (app) => {

    // Create a new Product
    app.post("/api/v1/products", productController.createProduct);

    // Retrieve all Products
    app.get("/api/v1/products", productController.getAllProductsByCategory);

    // Retrieve a single Product with productId
    app.get("/api/v1/products/:productId", productController.getProductById);
}