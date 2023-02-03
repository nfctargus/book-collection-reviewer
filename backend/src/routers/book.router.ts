import axios from "axios";
import { request, Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { sample_books, sample_categories } from "../books";
import { BookModel } from "../models/book.model";

const router = Router();

//Get all books from local 
/* router.get("/",(req,res) => {
    res.send(sample_books);
}) */

//Get all books from Mongo 
router.get("/",expressAsyncHandler(async(req,res) => {
    const books = await BookModel.find();
    res.send(books);
}))

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
/* router.get("/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const books = sample_books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    res.send(books);
}) */

//Get a book based on a search, checks Book Name & Author (Mongo)
router.get("/search/:searchTerm", expressAsyncHandler(async (req,res) => {
    const regEx = new RegExp(req.params.searchTerm, 'i');
    const books = await BookModel.find({title: {$regex:regEx}})
    res.send(books);
}))

//Get all book categories (local)
/* router.get("/categories",(req,res) => {
    res.send(sample_categories);
}) */

//Get all book categories (Mongo)
router.get("/categories",expressAsyncHandler(async (req,res) => {
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
}))

//Get all books by provided category (local)
/* router.get("/categories/:category", (req,res) => {
    const categories = req.params.category;
    const books = sample_books.filter(book => book.categories?.includes(categories));
    res.send(books);
}) */
//Get all books by provided category (mongo)
router.get("/categories/:category", expressAsyncHandler(async (req,res) => {
    const books = await BookModel.find({categories: req.params.category})
    res.send(books);
}))

// Get a book by ID (local)
/* router.get("/:bookId", (req,res) => {
    const bookId = req.params.bookId;
    const book = sample_books.find(book => book.id == bookId);
    res.send(book);
}) */

// Get a book by ID (mongo)
router.get("/:bookId", expressAsyncHandler(async (req,res) => {
    const book = await BookModel.findById(req.params.bookId);
    res.send(book);
}))


// Update selected book
router.put('/:bookId', (req, res) => {
    const selectedBook = req.body;
    BookModel.findOneAndUpdate({isbn:selectedBook.isbn},{title:selectedBook.title,author:selectedBook.author,favourite:selectedBook.favourite,stars:selectedBook.stars}, (error:any,data:any) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send();
        }
    })
})

router.get('/add/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
        const bookData = response.data.items[0].volumeInfo;
        const newBook = new BookModel({
            isbn: isbn,
            title: bookData.title,
            author: bookData.authors[0],
            favourite:false,
            stars:2.5,
            imageUrl: bookData.imageLinks.thumbnail || '/',
            categories:bookData.categories
        }); 
        
        await newBook.save();
        res.send(`Book with ISBN ${isbn} saved successfully`);

    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/addAdvancedSearch/:searchTerm', async (req, res) => {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.searchTerm}`);
        const books = response.data.items;
        const isbns:string[] = books.map((book:any) => book.volumeInfo.industryIdentifiers);
        const titles:string[] = books.map((book:any) => book.volumeInfo.title);
        const authors:string[] = books.map((book:any) => book.volumeInfo.authors || "Unknown Author");
    
        res.send({isbns:isbns,titles:titles,authors:authors})
    } catch (error) {
        console.error(`Error searching for books: ${error}`);
    }
}); 


export default router;