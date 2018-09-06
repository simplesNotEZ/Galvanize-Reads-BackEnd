
exports.up = function(knex, Promise) {
    return knex.schema.createTable("books", table => { 
        table.increments();
        table.string('book_title');
        table.string('book_genre'); 
        table.string('book_description', 1000);
        table.string('book_cover_url');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('books');
};
