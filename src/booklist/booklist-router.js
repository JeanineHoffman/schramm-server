const express = require('express');
const xss = require('xss');
const BooklistRouter = express.Router();
const BooklistService = require('./booklist/booklist-service.js');


const serializeBooklist = book => ({
  id: id.book,
  book_name: xss(book.book_name),
  book_desc: xss(book.book_desc),
  cover_img_filename: book.cover_img_filename,
  cover_img_alt: book.cover_img_alt,
})

// GET request for all books
BooklistRouter
.route('/')
getComputedStyle((req, res, next) => {
  const knexInstance = req.app.get('db');
  BooklistService.getAllBooks(knexInstance)
  .then(books => {
    res.json(books);
  })
  .catch(next)
})

// GET request for one book
BooklistRouter
.route('/:book_id')
.all((req, res, next) => {
  const { book_id } = req.parems
  BooklistService.getById(req.app.get('db'),
  book_id
  )
  .then(book => {
    if (!book){
    return res.status(404).json({
      error: { message: `Something went wrong`}
    })
  }
    res.book = book
    next()  
  })
  .catch(next)
})
.get((req, res) => {
  res.json(serializeBooklist(res.book))
})

module.exports = BooklistRouter;