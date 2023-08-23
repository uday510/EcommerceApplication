const orderController = require("../controllers/order.controller");
const { authUser } = require("../middlewares/index");



module.exports = (app) => { 

    // create a new order
    app.post("/app/api/v1/orders", [authUser.verifyToken], orderController.createOrder);

    // get all orders

    app.get("/app/api/v1/orders", [authUser.verifyToken], orderController.getOrders);

    // get order by id

    app.get("/app/api/v1/orders/:orderId", [authUser.verifyToken], orderController.getOrder);
};