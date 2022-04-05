const db = require('/Users/yasir/Desktop/CoHigher/server/model.js');
const userJobsController = {};

userJobsController.signup = (req, res, next) => {
    const sqlQuery = 'SELECT * FROM USERS '

    db.query(sqlQuery)
      .then(payload => {
        res.locals = payload.rows;
        next();
      }).catch(err=>{
        return next({
          log:'Error in userJobController.signup',
          message:'Cant get users'
        });
      });
};

userJobsController.login = (req, res, next) => {
    const sqlQuery = ''

    db.query(sqlQuery)
      .then(payload => {
        res.locals = payload.rows;
        next();
      }).catch(err=>{
        return next({
          log:'Error in userJobController.login',
          message:'Cant login'
        });
      });
  
};

userJobsController.getUserJobs = (req, res, next) => {
  let userId = 1;
  const sqlQuery = `SELECT * FROM JOBS WHERE userID = '${userId}'`

  db.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      next();
    }).catch(err=>{
      return next({
        log:'Error in userJobsController.getUserJobs',
        message: 'Cant get user jobs'
      });
    });

};

userJobsController.getCohortJobs = (req, res, next) => {
  let cohortId = 31;

  const sqlQuery = `SELECT * FROM USERS,JOBS WHERE cohortId=${cohortId} AND USERS.userid=jobs.userid`

  db.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      next();
    }).catch(err=>{
      return next({
        log:'Error in userJobsController.getCohortJobs',
        message: 'Cant get cohort jobs'
      });
    });

};



module.exports = userJobsController;
