
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");

module.exports = (app) => {
    categoryRoutes(app) // Routes to categoryRoutes file for category urls
    productRoutes(app) // Routes to productRoutes file for product urls
}
