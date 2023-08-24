const Product = require("../models/product.model");
const Category = require("../models/category.model");

// Controller to create a new product
const createProduct = async (req, res) => {
    try {

        const { title, price, description, availability, categoryId } = req.body;

        // Validate required fields
        if (!title || !price || !description || !availability || !categoryId) {
            res.status(400).send({ error: 'Required fields are missing' });
        }
        // check whether the category exists
        const category = await Category.find({
            name: categoryId,
        })

        if (category.length === 0) {
            return res.status(400).send({ error: 'Category does not exist' });
        }

        // check if the product already exists

        const product = await Product.find({
            title: title,
        });

        if (product.length > 0) {
            return res.status(400).send({ error: 'Product already exists' });
        }
        const newProduct = new Product({
            title,
            price,
            description,
            availability,
            category: category[0]._id
        });

        const savedProduct = await newProduct.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(500).send({ error: 'Could not create the product' });
    }
};

// Controller to get a list of all products
const getAllProductsByCategory = async (req, res) => {
    try {
        const response = {};

        const categories = await Category.find();

        for (let i = 0; i < categories.length; i++) {
            const products = await Product.find({
                category: categories[i]._id,
            });
            response[categories[i].name] = products;
        }

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ error: 'Could not retrieve products' });
    }
};

// Controller to get product details by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.productId;

        if (!productId) {
            res.status(400).send({ error: 'Product ID is missing' });
        }

        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).send({ error: 'Product not found' });
        } else {
            res.status(200).send(product);
        }
    } catch (error) {
        res.status(500).send({ error: 'Could not retrieve product details' });
    }
};

module.exports = {
    createProduct,
    getAllProductsByCategory,
    getProductById
};
