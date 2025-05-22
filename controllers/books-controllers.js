const Books = require("../models/books-schema");

const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find();
        res.status(200).json(books)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};

const getOneBook = async (req, res) => {
    try {
        const bookByID = await Books.findById(req.params.id);
        res.status(200).json(bookByID);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};

const addBook = async (req, res) => {
    try {
        const {quantity, title, author} = req.body;
        const addBook = await Books.create({
            quantity,
            title,
            author
        });
        res.status(201).json(addBook)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};

const updateBook = async (req, res) => {
    try {
        const updateBook = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true}
        );
        res.status(200).json(updateBook)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};

const deleteBook = async (req, res) => {
    try {
        const deleteBook = await Books.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteBook);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
};




module.exports = {
    getAllBooks,
    getOneBook,
    addBook,
    updateBook,
    deleteBook,
}

