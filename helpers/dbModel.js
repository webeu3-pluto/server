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
         .where('email', email)
         .first();
   },

   getAllByCohort: function (role, cohort) {
      return db('users')
         .select('id', 'firstName', 'lastName', 'email', 'role', 'cohort')
         .where({
            role: role,
            cohort: cohort
         });
   },

   getTeamleadStudents: function (teamleadEmail) {
      return db('teamleadStudents as ts')
         .select('u.id', 'u.firstName', 'u.lastName')
         .sum('completed', { as: 'quizzes' })
         .avg('result', { as: 'score' })
         .leftJoin('users as u', 'u.id', 'ts.student_id')
         .leftJoin('users as us', 'us.id', 'ts.teamlead_id')
         .leftJoin('studentQuiz as sq', 'u.id', 'sq.student_id')
         .where('us.email', teamleadEmail)
         .groupBy('sq.student_id');
   },

   getStudentTeamleads: function (studentEmail) {
      return db('teamleadStudents as ts')
         .select('u.id', 'u.firstName', 'u.lastName')
         .countDistinct('q.id', { as: 'quizzes' })
         .avg('result', { as: 'score' })
         .leftJoin('users as u', 'u.id', 'ts.teamlead_id')
         .leftJoin('users as us', 'us.id', 'ts.student_id')
         .leftJoin('quiz as q', 'q.teamlead_id', 'ts.teamlead_id')
         .leftJoin('studentQuiz as sq', 'sq.quiz_id', 'q.id')
         .where({
            'us.email': studentEmail,
            'published': 1
         })
         .groupBy('ts.teamlead_id');
   },

   getTeamleadQuizCount: function (teamleadEmail) {
      return db('quiz as q')
         .countDistinct('q.id', { as: 'quizzesCreated' })
         .leftJoin('users as u', 'u.id', 'q.teamlead_id')
         .where({
            'u.email': teamleadEmail,
            'published': 1
         })
         .first();
   },

   getStudentTeamleadQuizCount: function (studentEmail) {
      return db('teamleadStudents as ts')
         .count('q.id', { as: 'quizzesCreated' })
         .leftJoin('users as u', 'u.id', 'ts.student_id')
         .leftJoin('users as us', 'us.id', 'ts.teamlead_id')
         .leftJoin('quiz as q', 'q.teamlead_id', 'ts.teamlead_id')
         .where({
            'u.email': studentEmail,
            'published': 1
         })
         .first();

   },

   getTeamleadCompletions: function (teamleadEmail) {
      return db.raw(`
         select sum(completed) as submitted,
         count(published) as total,
         avg(result) as avgStudentScore
         from quiz as q
         left join users as u
         on u.id = q.teamlead_id
         left join teamleadStudents as ts
         on q.teamlead_id = ts.teamlead_id
         left join studentQuiz as sq
         on sq.student_id = ts.student_id
         AND q.id = sq.quiz_id
         where u.email = '${teamleadEmail}'
         and published = 1
      `)
   },

   getStudentCompletions: function (studentEmail) {
      return db.raw(`
         select sum(completed) as submitted,
         count(published) as total,
         avg(ifnull(result, 0)) as avgQuizScore
         from teamleadStudents as ts
         left join users as u
         on u.id = ts.student_id
         left join users as us
         on us.id = ts.teamlead_id
         left join quiz as q
         on q.teamlead_id = ts.teamlead_id
         left join studentQuiz as sq
         on sq.student_id = ts.student_id
         AND q.id = sq.quiz_id
         where u.email = '${studentEmail}'
         and published = 1
      `)
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

   insertTeamleadStudent: function (user) {
      return db('teamleadStudents')
         .insert(user);
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
         .del();
   },

   deleteTeamleadStudent: function (user) {
      return db('teamleadStudents')
         .where(user)
         .del();
   }
}