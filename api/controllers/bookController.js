const asyncErrorHandler = require('express-async-handler');
const Book = require('../models/bookModel');

//@Desc Get All Books
//@Route GET /api/livros/
//@Access public
const getBooks = asyncErrorHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
});

//@Desc Get a Book
//@Route GET /api/livros/:id
//@Access public
const getBook = asyncErrorHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        res.status(404);
        throw new Error('ID não localizado.');
    }
    res.status(200).json(book);
});

//@Desc Add a new book to Documents
//@Route POST /api/livros/
//@Access public
const addBook = asyncErrorHandler(async (req, res) => {
    try {
        const doc = await Book.create(req.body);
        res.status(201).json({
            message: 'Livro cadastrado com sucesso.',
            document: doc,
        });
    } catch (err) {
        const errors = [];
        for (const field in err.errors) {
            errors.push(err.errors[field].message);
        }
        res.status(400);
        throw new Error(errors.join('|'));
    }
});

//@Desc Update a Book
//@Route PUT /api/livros/:id
//@Access public
const updateBook = asyncErrorHandler(async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    if (!updatedBook) {
        res.status(404);
        throw new Error('Livro não encontrado. Atualização não concluida.');
    }
    res.status(200).json({
        message: 'Livro atualizado com sucesso.',
        document: updatedBook,
    });
});

//@Desc Remove a Book
//@Route DELETE /api/livros/:id
//@Access public
const deleteBook = asyncErrorHandler(async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);

    if (!deletedBook) {
        res.status(404);
        throw new Error('Livro não encontrado. Remoção não concluída.');
    }
    res.status(200).json({
        message: `Livro '${deletedBook.title}' removido.`,
        document: deletedBook,
    });
});

//@Desc Get the Books grouped by genre
//@Route GET /api/livros/generos
//@Access public
const getGenres = asyncErrorHandler(async (req, res) => {
    const books = await Book.find();
    const genreBooks = {};
    for (const book of books) {
        const genre = book.genre.toLowerCase();
        if (!genreBooks[genre]) {
            genreBooks[genre] = { amount: 0, books: [] };
        }

        genreBooks[genre]['books'].push(book);
        genreBooks[genre]['amount'] += 1;
    }
    if (req.params.genre) {
        res.status(200).json(genreBooks[req.params.genre.toLowerCase()]);
    }
    res.status(200).json(genreBooks);
});

const getGenre = asyncErrorHandler(async (req, res) => {});

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
    getGenres,
    getGenre,
};
