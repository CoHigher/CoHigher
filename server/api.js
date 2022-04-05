const express = require('express');

const userJobsController = require('/userJobsController');

const router = express.Router();

router.get('/signup',
  userJobsController.signup,
  (req, res) => {;
    res.status(200).send(res.locals);
  });

router.get('/login',
  userJobsController.login,
  (req, res) => res.status(200).send(res.locals)
);


module.exports = router;
