const database = require("./database-connection")

module.exports = {
    list(tableName) {
        return database(tableName).select();
    },
    listBooks() {
        return database('books')
        .select('books.id', 'book_title', 'book_genre', 'book_description', 'book_cover_url', 'author_id', 'first_name', 'last_name', 'biography', 'portrait_url')
        .innerJoin('author_book', 'books.id', '=', 'author_book.book_id')
        .innerJoin('authors', 'authors.id', '=', 'author_book.book_id');
    },
    // listBooks() {
    //     return database('books')
    //     .leftOuterJoin('books.authorId1', '=', 'au1.id')
    //     .leftOuterJoin('books.authorId2', '=', 'au2.id')
    //     .leftOuterJoin('books.authorId3', '=', 'au3.id')
    //     .select({
    //         book_title: 'books.book_title',
    //         book_genre: 'books.book_genre',
    //         book_description: 'books.book_description',
    //         book_cover_url: 'books.book_cover_url',
    //         author1FirstName: 'au1.first_name',
    //         author1LastName: 'au1.last_name',
    //         author2FirstName: 'au2.first_name',
    //         author2LastName: 'au2.last_name',
    //         author3FirstName: 'au3.first_name',
    //         author3LastName: 'au3.last_name',
    //     });
    //}
    
    read(tableName, id) {
        return database(tableName).select().where('id', id);
    }
    // post(tableName, newEvent) {
    //     return database(tableName)
    //     .insert(newEvent)
    //     .returning('*')
    //     .then(record => record[0])
    // },
    // update(tableName, id, newEvent) {
    //     return database(tableName)
    //     .update(newEvent)
    //     .where('id', id)
    //     .returning('*')
    //     .then(record => record[0])
    // },
    // deleteOne(tableName, id) {
    //     return database(tableName)
    //     .delete()
    //     .where('id', id)
    //}
}