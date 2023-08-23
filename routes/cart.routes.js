const cartController = require("../controllers/cart.controller");
const { authUser } = require("../middlewares/index");


module.exports = (app) => { 
    // create a new cart
    app.post("/app/api/v1/cart", [authUser.verifyToken], cartController.addToCart);

 };