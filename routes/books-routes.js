const express = require("express");
const { getAllBooks, getOneBook, addBook, updateBook, deleteBook } = require("../controllers/books-controllers");
const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", getOneBook);

router.post("/", addBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;