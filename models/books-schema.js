const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("books", bookSchema);