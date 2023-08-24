const categoryController = require("../controllers/category.controller");

module.exports = (app) => {

    // Create a new Category
    app.post("/app/api/v1/categories", categoryController.create);

    // Retrieve all Categories
    app.get("/app/api/v1/categories", categoryController.getAllCategories);

    // Retrieve a single Category with categoryId
    app.get("/app/api/v1/categories/:categoryId", categoryController.getCategoryById);
}


