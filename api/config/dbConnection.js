const mongoose = require('mongoose');

const connectionDb = async () => {
    const connection = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Banco de dados conectado:
    ${connection.connection.name}`);
};

module.exports = connectionDb;
