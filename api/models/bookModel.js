const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Titulo obrigatório'],
    },
    author: {
        type: String,
        required: [true, 'Autor obrigatório'],
    },
    genre: {
        type: String,
        required: [true, 'Genero obrigatório'],
    },
});

module.exports = mongoose.model('Book', bookSchema);
