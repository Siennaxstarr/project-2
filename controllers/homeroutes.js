const router = require('express').Router();
const History = require('../models/searchHistory');

//Goes to Landing Page 
router.get('/', async (req, res) => {
  res.render('landingPage');
});

//Directs you to login
router.get('/login', async (req, res) => {
  res.render('login');
});

//Allows you to search jobs
router.get('/job-search', async (req, res) => {
  res.render('jobsearch');
});

router.get('/job-search/:id', async (req, res) => {
  try {
    const jobData = await History.findOne({
      where: {
        term: req.params.id
      },
      attributes: {
        exclude: ['id', 'term']
      }
    })
    console.log(jobData.result)
    res.render('jobsearch', { jobResults: jobData.result });
  } catch (err) {
    console.log(err)
  }

});

//Reviews applications
router.get('/applications', async (req, res) => {
  res.render('applications');
});

  
  module.exports = router;

  

  
