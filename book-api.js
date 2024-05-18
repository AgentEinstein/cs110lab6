const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books

let books = [];

app.use(cors());


app.post('/book', (req, res) => { 
   const book = req.body;
   console.log(book);
   books.push(book);
   res.send('Book is added to the database');
});

app.get('/books', (req,res) => {
   res.json(books); 
});

app.listen(port, () => console.log('Hello world app listening on port 3000'));