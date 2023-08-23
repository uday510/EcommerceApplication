const categoryController = require("../controllers/category.controller");


module.exports = (app) => {
    // Create a new Category
    app.post("/api/v1/categories", categoryController.create);

    // Retrieve all Categories
    app.get("/api/v1/categories", categoryController.getAllCategories);

    // Retrieve a single Category with categoryId
    app.get("/api/v1/categories/:categoryId", categoryController.getCategoryById);
}


