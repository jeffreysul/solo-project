
const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();
// This a router for all requests made to the api in regards to tasks

// get request for tasks
router.get('/', bookController.getBooks, (req, res) => {
    return res.status(200).json([...res.locals.books]);
});

// post request for a new task
router.post('/', bookController.addBook, bookController.getBooks, (req, res) => {
  return res.status(200).json([...res.locals.books]);
});

// put/update request for an existing task
router.put('/:id', (req, res) => {
  return res.status(200).json();
})

// delete request for an existing task
router.delete('/:id', bookController.deleteBook, bookController.getBooks, (req, res) => {
  return res.status(200).json([...res.locals.books]);
})

module.exports = router;