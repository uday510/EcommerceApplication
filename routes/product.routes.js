const { authUser } = require("../middlewares/index")
const productController = require("../controllers/product.controller");

module.exports = (app) => {

    // Create a new Product
    app.post("/api/v1/product", productController.createProduct);

    // Retrieve all Products
    app.get("/api/v1/product", productController.getAllProductsByCategory);

    // Retrieve a single Product with productId
    app.get("/api/v1/product/:productId", productController.getProductById);
}