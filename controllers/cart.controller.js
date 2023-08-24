const Cart = require('../models/cart.model');
const Product = require('../models/product.model');
const User = require('../models/user.model');

const addToCart = async (req, res) => {
    try {
        const userId = req.userId;

        const user = await User.findOne({ userId: userId });

        // Check if the user already has a cart
        let userCart = await Cart.findOne({ user: user._id });

        if (!userCart) {
            // If the user doesn't have a cart, create a new one
            userCart = new Cart({
                user: user._id,
                products: [],
            });
        }

        // Get products from the request body
        const { items } = req.body; // items is an array of objects

        // Validate request
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).send({
                message: "Please check the items array in the request body and try again.",
            });
        }

        for (const item of items) {
            const { productId, quantity } = item;

            // Validate request
            if (!productId) {
                return res.status(400).send({
                    message: "Please check the items object in the items array and try again.",
                });
            }

            // Check if the product exists in the database
            const existingProduct = await Product.findById(productId);

            if (!existingProduct) {
                return res.status(404).send({
                    message: `Product with id ${productId} does not exist.`,
                });
            }

            // Check if the product is already in the cart
            const existingCartItem = userCart.products.find(
                (cartProduct) => cartProduct.product.toString() === productId
            );

            if (existingCartItem) {
                // Update the quantity of the existing cart item
                existingCartItem.quantity += quantity || 1;
            } else {
                // Add the product to the cart
                userCart.products.push({
                    product: productId,
                    quantity: quantity || 1,
                });
            }
        }

        // Save the user's cart
        const savedCart = await userCart.save();

        res.status(201).send({
            message: 'Products added to cart successfully.',
            cart: savedCart,
        });

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the cart.",
        });
    }
}
const getCartById = async (req, res) => {

    try {

        const cartId = req.params.id;

        // Check if the cart exists in the database
        if (!cartId) {
            return res.status(400).send({
                message: "Please provide a cart id.",
            });
        }

        // populate method is used to get the product details from the product collection
        const cart = await Cart.findById(cartId).populate('products.product');

        res.status(200).send({
            message: 'Cart fetched successfully.',
            cart,
        });

    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while fetching the cart.",
        });
    }
};

const updateCartById = async (req, res) => {

    const cartId = req.params.id;

    // Check if the cart exists in the database
    if (!cartId) {
        return res.status(400).send({
            message: "Please provide a cart id.",
        });
    }

    // Get products from the request body

    const { items } = req.body; // items is an array of objects

    // Validate request
    if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).send({
            message: "Please check the items array in the request body and try again.",
        });
    }

    try {

        const userId = req.userId;

        const user = await User.findOne({ userId: userId });

        // Check if the user already has a cart
        let userCart = await Cart.findOne({ user: user._id });


        if (!userCart) {
            return res.status(404).send({
                message: `Cart with id ${cartId} does not exist.`,
            });
        }

        for (const item of items) {

            const { productId, quantity } = item;

            // Validate request
            if (!productId) {
                return res.status(400).send({
                    message: "Please check the items object in the items array and try again.",
                });
            }

            // Check if the product exists in the database
            const existingProduct = await Product.findById(productId);

            if (!existingProduct) {
                return res.status(404).send({
                    message: `Product with id ${productId} does not exist.`,
                });
            }

            // Check if the product is already in the cart
            const existingCartItem = userCart.products.find(
                (cartProduct) => cartProduct.product.toString() === productId
            );

            if (existingCartItem) {
                // Update the quantity of the existing cart item
                existingCartItem.quantity += quantity || 1;
            } else {
                // Add the product to the cart
                userCart.products.push({
                    product: productId,
                    quantity: quantity || 1,
                });
            }
        }

        // Save the user's cart
        const savedCart = await userCart.save();

        res.status(201).send({
            message: 'Products added to cart successfully.',
            cart: savedCart,
        });

    } catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while updating the cart.",
        })
    }
};

const deleteItemFromCart = async (req, res) => {

    const cartId = req.params.id;
    const productId = req.body.productId;

    if (!cartId) {
        return res.status(400).send({
            message: "Please provide a cart id.",
        });
    }
    if (!productId) {
        return res.status(400).send({
            message: "Please provide a product id.",
        });
    }

    try {
        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).send({
                message: `Cart with id ${cartId} does not exist.`,
            });
        }

        // Check if the item to remove exists in the cart
        const itemIndex = cart.products.findIndex((item) => item.product.toString() === productId);

        if (itemIndex === -1) {
            return res.status(404).json({ message: 'Item not found in the cart' });
        }

        // Remove the item from the cart
        cart.products.splice(itemIndex, 1);

        // Save the updated cart
        const updatedCart = await cart.save();

        res.status(200).send({
            message: 'Item removed from cart successfully.',
            cart: updatedCart,
        });
    } catch (err) {

        return res.status(500).send({
            message: err.message || "Some error occurred while removing the item from the cart.",
        });

    }
};

module.exports = {
    addToCart,
    getCartById,
    updateCartById,
    deleteItemFromCart
}
