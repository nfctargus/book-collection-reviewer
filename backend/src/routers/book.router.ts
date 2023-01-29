import { Router } from "express";
import { sample_books, sample_categories } from "../books";

const router = Router();

//Get all books
router.get("/",(req,res) => {
    res.send(sample_books);
})

//Get a book based on a search, checks Book Name & Author
router.get("/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const books = sample_books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(books);
})

//Get all book categories
router.get("/categories",(req,res) => {
    res.send(sample_categories);
})
//Get all books by provided category
router.get("/categories/:category", (req,res) => {
    const categories = req.params.category;
    const books = sample_books.filter(book => book.categories?.includes(categories));
    res.send(books);
})
// Get a book by ID
router.get("/:bookId", (req,res) => {
    const bookId = req.params.bookId;
    const book = sample_books.find(book => book.id == bookId);
    res.send(book);
})

export default router;