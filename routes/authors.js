const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {
    queries.list('authors')
    .then(authors => {
        res.json({authors})
    })
})

module.exports = router