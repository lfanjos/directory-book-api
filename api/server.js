const express = require('express');
const connectionDb = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
connectionDb();
app.use(cors());
app.use(express.json());
app.use('/api/livros', require('./routes/bookRoutes'));
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log('Servidor ouvindo a porta:', process.env.PORT);
});
