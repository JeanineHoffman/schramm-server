const BooklistService = {
  getAllBooks(knex) {
    return knex
    select([
      'books.id',
      'books.book_name',
      'books.book_desc',
      'books.cover_img_filename',
      books.cover_img_alt
    ])
  },
  getById(knex,id) {
    return knex
    .select('*')
    .from('books')
    .where('id', id)
    .first()
  },
}

module.exports = BooklistService;