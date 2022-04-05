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
  
  const {userId} = req.body

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
  
  const {cohortId} = req.body

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

userJobsController.postUserJob = (req, res, next) => {

  const {company, userId, location, jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus} = req.body
  // destructure req.body to get the values
     const sqlQuery = `INSERT INTO JOBS (company, userId, location,jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus)
      VALUES ('${company}', '${userId}', '${location}', '${jobdescription}', '${salaryrange}', '${jobstatus}', '${interviewdate}', '${hiredstatus}')`
  //  const sqlQuery = `INSERT INTO JOBS (company, userId, location,jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus)
  //  VALUES ('Square', 3, 'New York,New York', 'software engineer', '200,000-300,000','final round','05/09/2022',FALSE)`
  
  

  db.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      next();
    }).catch(err=>{
      return next({
        log:'Error in userJobsController.postUserJob',
        message: 'Cant post user job'
      });
    });

};

userJobsController.updateUserJob = (req, res, next) => {

  // destructure req.body to get the values
  const {id, company, location, jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus} = req.body
  const sqlQuery = `UPDATE JOBS SET company = '${company}', location = '${location}', jobdescription = '${jobdescription}', salaryrange = '${salaryrange}', jobstatus = '${jobstatus}', interviewdate = '${interviewdate}', hiredstatus = '${hiredstatus}' WHERE id = ${id}`
    //  const sqlQuery = `UPDATE JOBS SET company = 'Reddit' WHERE id = 5`

  db.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      next();
    }).catch(err=>{
      return next({
        log:'Error in userJobsController.updateUserJob',
        message: 'Cant update user job'
      });
    });

};

userJobsController.deleteUserJob = (req, res, next) => {

  // destructure req.body to get the values
   const {id} = req.body
  const sqlQuery = `DELETE FROM JOBS WHERE id = ${id}`

  db.query(sqlQuery)
    .then(payload => {
      res.locals = payload.rows;
      next();
    }).catch(err=>{
      return next({
        log:'Error in userJobsController.deleteUserJob',
        message: 'Cant delete user job'
      });
    }
  );


};



module.exports = userJobsController;
