const express = require('express');
const router = express.Router();

//Get
router.get('/', (req, res) => {
    var db = require('./test')
    db(result => {
        res.send(result[0])
    })
});

//Add

//Delete


module.exports = router;