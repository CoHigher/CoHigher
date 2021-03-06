const db = require("./model.js");
const userJobsController = {};
const axios = require("axios");

userJobsController.validateUser = (req, res, next) => {
  const { email, password } = req.body;
  const sqlQuery = `SELECT * FROM USERS WHERE email = '${email}'`;
  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      if (res.locals.length > 0) {
        res.locals.message = "User already exists";
        return next();
      } else {
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.validateUser",
        message: "Cant validate user",
      });
    });
};

userJobsController.signup = (req, res, next) => {
  const { fullname, email, password, cohortId } = req.body;
  const sqlQuery = `INSERT INTO USERS (fullname, email, password, cohortId) VALUES ('${fullname}','${email}', '${password}', '${cohortId}') RETURNING *`;
  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobController.signup",
        message: "Cant get users",
      });
    });
};

userJobsController.login = (req, res, next) => {
  const { email, password } = req.body;
  const sqlQuery = `SELECT * FROM USERS WHERE email = '${email}' AND password = '${password}'`;

  db.query(sqlQuery)
    .then((payload) => {
      if (payload.rows.length === 0) {
        return next({
          log: "Error in userJobsController.login",
          message: "Cant login",
        });
      }
      console.log("In controller", payload.rows);
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobController.login",
        message: "Cant login",
      });
    });
};

userJobsController.getUserJobs = (req, res, next) => {
  // {
  //   "userId":1
  // }
  const { userId } = req.params;
  // const userId = 1;

  const sqlQuery = `SELECT * FROM JOBS WHERE userID = '${userId}'`;

  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.getUserJobs",
        message: "Cant get user jobs",
      });
    });
};

userJobsController.getCohortJobs = (req, res, next) => {
  //   {
  //   "cohortId":1
  //   }
  const { cohortId } = req.body;

  const sqlQuery = `SELECT * FROM USERS,JOBS WHERE cohortId=${cohortId} AND USERS.userid=jobs.userid`;

  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.getCohortJobs",
        message: "Cant get cohort jobs",
      });
    });
};

userJobsController.postUserJob = (req, res, next) => {
  //   {
  //     "company": "Snapchat",
  //     "userId":  3,
  //     "location":   "Los Angeles",
  //     "jobdescription": "Senior Software Engineer",
  //     "salaryrange": "200,000-300,000",
  //     "jobstatus":  "phone interview",
  //     "interviewdate": "2022-05-15",
  //     "hiredstatus": false
  //  }

  const initialObj = {
    interviewdate: "2022-05-15",
    hiredstatus: false,
  };

  const {
    company,
    userId,
    location,
    jobdescription,
    salaryrange,
    jobstatus,
    interviewdate,
    hiredstatus,
  } = Object.assign({}, initialObj, req.body);
  // destructure req.body to get the values
  const sqlQuery = `INSERT INTO JOBS (company, userId, location,jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus)
      VALUES ('${company}', '${userId}', '${location}', '${jobdescription}', '${salaryrange}', '${jobstatus}', '${interviewdate}', '${hiredstatus}') RETURNING *`;
  //  const sqlQuery = `INSERT INTO JOBS (company, userId, location,jobdescription, salaryrange, jobstatus, interviewdate, hiredstatus)
  //  VALUES ('Square', 3, 'New York,New York', 'software engineer', '200,000-300,000','final round','05/09/2022',FALSE)`

  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.postUserJob",
        message: "Cant post user job",
      });
    });
};

userJobsController.updateUserJob = (req, res, next) => {
  //   {
  //     "id": 6,
  //    "company": "Instagram",
  //    "location":   "Los Angeles",
  //    "jobdescription": "Senior Software Engineer",
  //    "salaryrange": "200,000-300,000",
  //    "jobstatus":  "phone interview",
  //    "interviewdate": "2022-05-15",
  //    "hiredstatus": false
  // }

  // destructure req.body to get the values

  const initialObj = {
    interviewdate: "2022-05-15",
    hiredstatus: false,
  };

  const {
    id,
    company,
    location,
    jobdescription,
    salaryrange,
    jobstatus,
    interviewdate,
    hiredstatus,
  } = Object.assign({}, initialObj, req.body);
  const sqlQuery = `UPDATE JOBS SET company = '${company}', location = '${location}', jobdescription = '${jobdescription}', salaryrange = '${salaryrange}', jobstatus = '${jobstatus}', interviewdate = '${interviewdate}', hiredstatus = '${hiredstatus}' WHERE id = ${id} RETURNING *`;
  //  const sqlQuery = `UPDATE JOBS SET company = 'Reddit' WHERE id = 5`

  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.updateUserJob",
        message: "Cant update user job",
      });
    });
};

userJobsController.deleteUserJob = (req, res, next) => {
  //   {
  //     "id": 6
  // }
  // destructure req.body to get the values
  const { id } = req.params;
  console.log(id);
  const sqlQuery = `DELETE FROM JOBS WHERE id = ${id} RETURNING *`;

  db.query(sqlQuery)
    .then((payload) => {
      res.locals = payload.rows;
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.deleteUserJob",
        message: "Cant delete user job",
      });
    });
};

userJobsController.gitOAuth = (req, res, next) => {
  const body = {
    client_id: "72859ee5baefaa57a98c",
    client_secret: "4de3df3bdd6e657def283fd020c33ec6853d207b",
    token: req.query.code,
  };

  const opts = {
    method: "POST",
    headers: { accept: "application/json" },
  };
  const url = `https://github.com/login/oauth/access_token?client_id=${body.client_id}&redirect_uri=http://localhost:8080/github/auth&client_secret=${body.client_secret}&code=${body.token}`;
  axios(url, opts)
    .then((response) => {
      const token = response.data.access_token;
      res.locals.authToken = token;
      res.cookie("token", token);
      next();
    })
    .catch((err) => {
      return next({
        log: "Error in userJobsController.gitOAuth",
        message: "Cannot Authorize user",
      });
    });
};

module.exports = userJobsController;
