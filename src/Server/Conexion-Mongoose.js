const mongoose = require('mongoose');
const password = require('./Password.js');

const connectionString = `mongodb+srv://portafolio:${password}@cluster0.evbci.mongodb.net/Portafolio?retryWrites=true&w=majority`;

mongoose.connect(connectionString)

  .then(() => {
    console.log('Conexion a MongoDB establecida');
  })
  .catch(err => {
    console.error(err);
  });

const portafolioSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fecha: String,
  estado: String
});