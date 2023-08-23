const categoryController = require("../controllers/category.controller");


module.exports = (app) => {
    // Create a new Category
    app.post("/api/v1/category", categoryController.create);

    // Retrieve all Categories
    app.get("/api/v1/category", categoryController.getAllCategories);

    // Retrieve a single Category with categoryId
    app.get("/api/v1/category/:categoryId", categoryController.getCategoryById);
}


