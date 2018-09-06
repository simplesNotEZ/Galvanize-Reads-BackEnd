const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {
    // queries.list('books')
    // .then(books => {
    //     res.json({books})
    // })
    queries.listBooks()
    .then(books => {
        res.json({books});
    });
})

router.get('/:id', function(request,response) {
    console.log("request.params.id is: ", request.params.id);
    console.log("the data type of the id is", typeof request.params.id);
    queries.read("books", request.params.id).then(book => {
        book
            ? response.json({book})
            : response.status(404).json({message: 'Not found'})
    });
})

// router.post('/', function(request,response,next){
//     queries.post("events", request.body)
//     .then(newEvent => {
//     response.status(201).json({newEvent})
//     })
// })

// router.put('/:id', function(request,response,next){
//     queries.update("events", request.params.id, request.body)
//     .then(updatedEvent => response.json(updatedEvent))
// })

// router.delete('/:id', function(request,response,next){
//     queries.deleteOne("events", request.params.id)
//     .then(() => {
//     response.status(204).json()
//     })
//})

module.exports = router