const router = require('express').Router();

router.get('/', (req, res) => {
res.send('This is a new GET route');
})


module.exports.router