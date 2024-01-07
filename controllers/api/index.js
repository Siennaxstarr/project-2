const router = require('express').Router();

const jobSearchRoutes = require('./jobSearchRoutes');

router.use("/job-search", jobSearchRoutes);


module.exports = router;

