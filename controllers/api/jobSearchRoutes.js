const router = require('express').Router();
const History = require('../../models/searchHistory');

router.post('/', async (req, res) => {
    try {
       const searchTerm = encodeURIComponent(req.body.searchTerm);
       const url = `https://jsearch.p.rapidapi.com/search?query=${searchTerm}&num_pages=1`;
       const options = {
           method: 'GET',
           headers: {
               'X-RapidAPI-Key': '0b9700a505msh43a8ab52968bbeep18341fjsn0dc3a212ea99',
               'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
           }
       };
   
   
       const response = await fetch(url, options);
       const searchResults = await response.json();
       const jobResults = searchResults.data;
       const newHistory = await History.create({
        term: req.body.searchTerm,
        result: jobResults
       });


       res.status(201).json(newHistory);
   } catch (err) {
    console.log(err)    
    res.status(500).json(err)
   }
    
})

module.exports = router;