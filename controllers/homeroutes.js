const router = require('express').Router();
const withAuth = require('../utils/auth');
const History = require('../models/searchHistory');


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
   if (jobData.result != null){
     res.render('jobsearch', { jobResults: jobData.result });
   }else {
    res.json({ data: jobData.result })
   }
  } catch (err) {
    console.log(err)
  }

});

router.get('/job-search/:searchTerm/:job/:isMobile', async (req, res) => {
  try {
    const jobData = await History.findOne({
      where: {
        term: req.params.searchTerm
      }
    });

    const jobResults = jobData.result;
    const fullInfo = jobResults.find((job) => job.job_title === req.params.job);

    if (req.params.isMobile === 'true'){
      res.render('jobsearchmobile', { fullInfo })
    }else{

      res.render('jobsearch', { jobResults, fullInfo })
    }
  } catch (err) {
    res.status(500)
  }
})

module.exports = router;




