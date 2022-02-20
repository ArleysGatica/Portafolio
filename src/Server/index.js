const express = require('express');
const app = express();
const cors = require('cors');
//const http = require('http');

/*const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Worldwii');
}); */


app.use(cors());
app.use(express.json());

notas = [
  {
    id: 1,
    titulo: 'Nota 1',
    descripcion: 'Descripcion de la nota 1',
    fecha: '2020-01-01',
    estado: 'pendiente'
  },

];

app.get('/api/notes', (req, res) => {
  res.json(notas);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.query.id);
  const nota = notas.find(nota => nota.id === id);

  (nota) ? res.json(nota) : res.status(404).end()

});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

