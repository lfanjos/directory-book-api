const express = require('express');
const {
    getBooks,
    addBook,
    getBook,
    updateBook,
    deleteBook,
    getGenres,
    getGenre,
} = require('../controllers/bookController');
const idValidator = require('../middlewares/idValidator');
const router = express.Router();

router.param('id', idValidator);
router.route('/').get(getBooks).post(addBook);
router.route('/generos/').get(getGenres);
router.route('/generos/:genre').get(getGenres);
router.route('/:id').get(getBook).put(updateBook).delete(deleteBook);

module.exports = router;
