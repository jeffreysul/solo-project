const mongoose = require('mongoose');
// const dbConnect = require('../db');
const Schema = mongoose.Schema;
    
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// model creation for export and usage
const Book = mongoose.model('book', bookSchema);

// exports all modules in an object to be used in the controller
module.exports = Book;