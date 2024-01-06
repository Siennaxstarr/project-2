const router = require('express').Router();
const withAuth = require('../utils/auth');


//Goes to Landing Page 
router.get('/', async (req, res) => {
    res.render('landingPage');
  });

  //Directs you to login
router.get('/login', async (req, res) => {
    res.render('login');
  });

  //Allows you to search jobs
router.get('/job-search', withAuth, async (req, res) => {
    res.render('jobSearch');
  });

  //Reviews applications
router.get('/applications', withAuth, async (req, res) => {
    res.render('applications');
  });

  
  module.exports = router;

  

  
