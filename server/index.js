const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const controller = require('./controllers/book_controller');
app.use(bodyParser.json());
app.use( express.static( __dirname + "/../public/build") );

app.get('/api/books', controller.read);

app.post('/api/books', controller.create);

app.put('/api/books/:id', controller.update);

app.delete('/api/books/:id', controller.delete);

app.listen(port, ()=>{
    console.log(`This server is OVER 9000 because it is operating on port ${port}`)
})