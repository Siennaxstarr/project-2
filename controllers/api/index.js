const router = require('express').Router();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
const jobSearchRoutes = require('./jobSearchRoutes');

router.use("/job-search", jobSearchRoutes);


module.exports = router;
