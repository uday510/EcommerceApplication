const Order = require('../models/order.model');
const User = require('../models/user.model');
const Product = require('../models/product.model');
const Cart = require('../models/cart.model');

exports.createOrder = async (req, res) => {
    try {
        
        const cartId = req.body.cartId;
        const userId = req.userId;
        const shippingAddress = req.body.shippingAddress;


        if (!cartId || !userId) {
            return res.status(400).send({
                message: "Cart ID and User ID are required"
            });
        }
        if (!shippingAddress) {
            return res.status(400).send({
                message: "Shipping address is required"
            });
         }

        // Find the user
        const user = await User.findOne({ userId: userId });

        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }

        // Find the cart
        const cart = await Cart.findById(cartId);

        if (!cart) {
            return res.status(404).send({
                message: "Cart not found"
            });
        }

        // Calculate total amount
        let totalAmount = 0;

        // Get the product IDs from the cart
        const productIds = cart.products.map(item => item.product);

        //  Get the products from the database
        const products = await Product.find({ _id: { $in: productIds } });

        // for each product, get the quantity from the cart
        products.forEach(product => {
            const cartProduct = cart.products.find(item => item.product.toString() === product._id.toString());
            totalAmount += product.price * cartProduct.quantity;
        });

        // Create the order
        const order = new Order({
            user: user._id,
            products: cart.products,
            totalAmount: totalAmount,
            shippingAddress: shippingAddress,
        });

        const savedOrder = await order.save();

        if (!savedOrder) {
            console.error("Error saving order:", savedOrder);
            return res.status(500).send({
                message: "Unable to create order, please try again later",
            });
        }

        // Delete the cart
        await Cart.findByIdAndDelete(cartId);

        // Return the saved order
        return res.status(200).send({
            message: "Order created successfully",
            order: savedOrder,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Unable to create order, please try again later",
        });
    }
};

exports.getOrders = async (req, res) => {
    // Implement the logic to retrieve orders here

    try {
        const userId = req.userId;

        const user = await User.findOne({ userId: userId });

        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }

        const orders = await Order.find({ user: user._id });

        if (!orders) {
            return res.status(404).send({
                message: "Orders not found"
            });
        }
        return res.status(200).send({
            message: "Orders retrieved successfully",
            orders
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Unable to retrieve orders, please try again later",
        });
     }
};

exports.getOrder = async (req, res) => {
    // Implement the logic to retrieve a single order by ID here

    try {
       
        const orderId = req.params.orderId;

        if (!orderId) {
            return res.status(400).send({
                message: "Order ID is required"
            });
        }

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).send({
                message: "Order not found"
            });
        }

        return res.status(200).send({
            message: "Order retrieved successfully",
            order
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Unable to retrieve order, please try again later",
        });
   }
};
