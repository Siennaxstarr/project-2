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

//Reviews applications
router.get('/applications', async (req, res) => {
  res.render('applications');
});


module.exports = router;




