const path = require('path');
const express = require('express');
const dbConnect = require('./db');
const bookRouter = require('./routes/bookRouter');
// const cors = require('cors');
// check if mongoose is actually needed
const mongoose = require('mongoose');
// makes an app level express object
const app = express();
const PORT = 3000;

// connect to the database
dbConnect();
// handle parsing request body
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// handle request for static fields
app.use(express.static(path.resolve(__dirname, 'src')));



// define route handlers
// route handler for books
app.use('/books', bookRouter);




// route handler to respond with main app
app.get('/', (req, res) => {
  console.log('inside response for main app');
  return res.sendFile(path.resolve(__dirname, '../../public/index.html'));
})
// route handler for /bundle.js 
app.get('/bundle.js', (req, res) => {
  console.log('inside router for bundle.js');
  return res.sendFile(path.resolve(__dirname, '../../public/bundle.js'));
})



// ERROR HANDLING
// catch-all route handler (local error handler)
app.use((req, res) => res.status(404).send('Wrong page buddy'));

// express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;