const orderController = require("../controllers/order.controller");
const { authUser } = require("../middlewares/index");



module.exports = (app) => { 

    // create a new order
    app.post("/app/api/v1/order", [authUser.verifyToken], orderController.createOrder);
};