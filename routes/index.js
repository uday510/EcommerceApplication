
const categoryRoutes = require("./category.routes");
const productRoutes = require("./product.routes");
const authRoutes = require("./auth.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");

module.exports = (app) => {
    categoryRoutes(app) // Routes to categoryRoutes file for category urls
    productRoutes(app) // Routes to productRoutes file for product urls
    authRoutes(app) // Routes to authRoutes file for auth urls
    cartRoutes(app) // Routes to cartRoutes file for cart urls
    orderRoutes(app) // Routes to orderRoutes file for order urls
}
