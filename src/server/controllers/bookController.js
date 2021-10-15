// const { default: BookDisplay } = require('../../components/BookDisplay');
const dbConnect = require('../db');
const Book = require('../models/bookModel');

const bookController = {};

bookController.getBooks = (req, res, next) => {
  Book.find({}, (err, books) => {
    if (err) return next('Error in bookController.getBooks: ' + JSON.stringify(err));
    const result = books.map(item => {
      return { 'title': item.title, 'id': item._id };
    })
    res.locals.books = result;
    return next();
  })
}

bookController.addBook = (req, res, next) => {
  const title = req.body.title;
  // const author = req.body.author;
  Book.create({ title: title, }, (err, book) => {
    if (err) return next('Error in bookController.addBook: ' + JSON.stringify(err));
    console.log('addBook: ', book);
    return next();
  })
}

bookController.deleteBook = (req, res, next) => {
  const id = req.params.id;
  Book.findOneAndDelete({ _id: id }, (err, book) => {
    if (err) return next('Error in bookController.deleteBook: ' + JSON.stringify(err));
    return next();
  })
}
// export the bookController for us
module.exports = bookController;