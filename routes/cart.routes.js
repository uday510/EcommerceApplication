const cartController = require("../controllers/cart.controller");
const { authUser } = require("../middlewares/index");

module.exports = (app) => { 
    // create a new cart
    app.post("/app/api/v1/cart", [authUser.verifyToken], cartController.addToCart);

    // get cart by cart id
    app.get("/app/api/v1/cart/:id", [authUser.verifyToken], cartController.getCartById);

    // update cart by cart id
    app.patch("/app/api/v1/cart/:id", [authUser.verifyToken], cartController.updateCartById);

    // delete an item from the cart

    app.delete("/app/api/v1/cart/:id", [authUser.verifyToken], cartController.deleteItemFromCart);

 };