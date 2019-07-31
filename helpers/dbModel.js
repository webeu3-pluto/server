const db = require('../config/dbConfig');

module.exports = {
   get: function () {
      return db('users')
         .select('id', 'firstName', 'lastName', 'email', 'role', 'cohort'); // returns only the id and email fields. not cool to show the password hashes
   },

   getUserById: function (id) {
      return db('users')
         .select('id', 'firstName', 'lastName', 'email', 'role', 'cohort')
         .where({ id })
         .first();
   },

   getUserByEmail: function (email) {
      return db('users')
         .select('id', 'firstName', 'lastName', 'email', 'role', 'cohort')
         .where('email', email);
   },

   getBy: function (filter) {
      return db('users')
         .where(filter);
   },

   getByRole: function (role) {
      return db('users')
         .select('id', 'email', 'role')
         .where('role', role);
   },

   insertUser: function (user) {
      return db('users')
         .insert(user)
         .then(([id]) => {
            return this.getUserById(id);
         });
   },

   updateUser: function (email, changes) {
      return db('users')
         .where({ email })
         .update(changes)
         .then(() => {
            return this.getUserByEmail(email);
         });
   },

   deleteUser: function (email) {
      return db('users')
         .where({ email })
         .del()
   }
}