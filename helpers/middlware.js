const Users = require('../helpers/dbModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');
const v = require('./variables');

module.exports = {
   validateBody: function (req, res, next) {
      if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
         next();
      } else {
         res.status(400).json({ message: v.noUserData });
      }
   },

   validateEmail: function (req, res, next) {
      const { email } = req.body;
      if (v.mailRegex.test(email)) {
         next();
      } else {
         res.status(400).json({ message: v.invalidEmail });
      }
   },

   validateUser: async function (req, res, next) {
      const { firstName, lastName, email, password, role, cohort } = req.body;
      // this ternary operator is added as a fallback in case login req body is supplied without an email
      const user = email !== undefined ? await Users.getBy({ email }).first() : undefined;
      if (firstName && lastName && email && password && role && cohort && req.path === "/register") {
         (user === undefined) ? next() : res.status(403).json({ message: v.alreadyInUse });
      } else if (email && password && req.path === "/login") {
         req.user = user;
         (user && bcrypt.compareSync(password, user.password)) ? next() : res.status(401).json({ message: v.invalid });
      } else {
         res.status(400).json({ message: v.missingFields });
      };
   },

   restrict: function (req, res, next) {
      const token = req.headers.authorization;
      if (token) {
         jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
               res.status(401).json({ message: v.tokenInvalid });
            } else {
               req.decodedToken = decodedToken;
               next();
            }
         })
      } else {
         res.status(400).json({ message: v.supplyToken });
      };
   },

   modifier: function (arrayObj) {
      arrayObj.map(obj => {
         obj.fullName = obj.firstName + ' ' + obj.lastName
         obj.score = Math.round(obj.score)
         delete obj.firstName
         delete obj.lastName
         return obj;
      });
      return arrayObj
   }
};