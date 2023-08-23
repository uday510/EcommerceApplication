const Category = require('../models/category.model.js');


// Create and Save a new Category
exports.create = async (req, res) => {
    // Validate request (we are only checking if a name was provided)
    if (!req.body.name) {
        return res.status(400).send({
            message: "Category name can not be empty"
        });
    }

    const categoryObj = new Category({
        name: req.body.name
    });

    try {
        // Save Category in the database
        const data = await categoryObj.save();
        // Send response
        res.status(201).send(data);
    } catch (err) {
        // Send error response
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Category."
        });
    }
}

// Retrieve and return all categories from the database.

exports.getAllCategories = async (req, res) => {

    try {
        const data = await Category.find();

        // remove meta data and return only the data

        const response = data.map((item) => {
            return {
                id: item._id,
                name: item.name
            }
        });

        res.status(200).send(response);

    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        });
    }
}

// Find a single category with a categoryId

exports.getCategoryById = async (req, res) => {

    try {
        if (!req.params.categoryId) {
            return res.status(400).send({
                message: "Category id can not be empty"
            });
        }

        const data = await Category.findById(req.params.categoryId);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving category."
        });
    }
}
