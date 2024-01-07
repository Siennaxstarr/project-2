const router = require('express').Router();
const withAuth = require('../utils/auth');


//Goes to Landing Page 
router.get('/', async (req, res) => {
    res.render('landingPage', {
      loggedIn: req.session.logged_in,
    });
  });

  //Directs you to login
router.get('/login', async (req, res) => {
    res.render('login', {
      loggedIn: req.session.logged_in,
    });
  });

  //Allows you to search jobs
router.get('/job-search', withAuth, async (req, res) => {
    res.render('jobSearch', {
      loggedIn: req.session.logged_in,
    });
  });

  //Reviews applications
router.get('/applications', withAuth, async (req, res) => {
    res.render('applications', {
      loggedIn: req.session.logged_in,
    });
  });

  
  module.exports = router;

  

  
