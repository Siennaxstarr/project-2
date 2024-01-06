const router = require('express').Router();


//Runs when user logs in with existing account
router.post('/login', async (req, res) => {
    try {
        //Find if the returning user exists
        const userData = await User.findOne({ where: { username: req.body.username } });
        
        //If user does not exist return error and message
        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
        
        //Helper function to check if password mathches hashed password
        const validPassword = await userData.checkPassword(req.body.password);
    
        //If passowrd is invalid return error and message
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
        
        //If username and password are valid, Then logged_in is added to session as true.
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;
