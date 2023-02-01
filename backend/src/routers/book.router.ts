import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { sample_books, sample_categories } from "../books";
import { BookModel } from "../models/book.model";

const router = Router();

//Get all books from local 
router.get("/",(req,res) => {
    res.send(sample_books);
})

//Get all books from Mongo 
/* router.get("/",expressAsyncHandler(async(req,res) => {
    const books = await BookModel.find();
    res.send(books);
})) */

//Populate the Database with our local data
router.get("/seed",expressAsyncHandler(async (req,res) => {
    const count = await BookModel.countDocuments();
    if(count >0) {
        res.send("Database has already been populated");
        return;
    }
    await BookModel.create(sample_books);
    res.send("Populated the database with sample data");
}))

//Get a book based on a search, checks Book Name & Author (local)
router.get("/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const books = sample_books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(books);
})

//Get a book based on a search, checks Book Name & Author (Mongo)
/* router.get("/search/:searchTerm", expressAsyncHandler(async (req,res) => {
    const regEx = new RegExp(req.params.searchTerm, 'i');
    const books = await BookModel.find({name: {$regex:regEx}})
    res.send(books);
})) */

//Get all book categories (local)
router.get("/categories",(req,res) => {
    res.send(sample_categories);
})

//Get all book categories (Mongo)
/* router.get("/categories",expressAsyncHandler(async (req,res) => {
    const categories = await BookModel.aggregate([
        {
            $unwind:'$categories'
        },
        {
            $group:{
                _id:'$categories',
                count:{$sum: 1}
            }
        },
        {
            $project: {
                _id: 0,
                name:'$_id',
                count:'$count'
            }
        }
    ]).sort({count: -1});

    const all = {
        name: 'All',
        count: await BookModel.countDocuments()
    }
    categories.unshift(all);
    res.send(sample_categories);
})) */

//Get all books by provided category (local)
router.get("/categories/:category", (req,res) => {
    const categories = req.params.category;
    const books = sample_books.filter(book => book.categories?.includes(categories));
    res.send(books);
})
//Get all books by provided category (mongo)
/* router.get("/categories/:category", expressAsyncHandler(async (req,res) => {
    const books = await BookModel.find({categories: req.params.category})
    res.send(books);
})) */

// Get a book by ID (local)
router.get("/:bookId", (req,res) => {
    const bookId = req.params.bookId;
    const book = sample_books.find(book => book.id == bookId);
    res.send(book);
})

// Get a book by ID (mongo)
/* router.get("/:bookId", expressAsyncHandler(async (req,res) => {
    const book = await BookModel.findById(req.params.bookId);
    res.send(book);
})) */


// Update favourite property for selected book
router.put("/:bookId", (req,res) => {
    const books = sample_books;
    const favourite = req.body.favourite;
    const bookId = req.params.bookId;
    const selectedBook = books.find((book) => book.id === bookId)
    
    selectedBook.favourite === favourite
    res.send(selectedBook)
    
})

export default router;