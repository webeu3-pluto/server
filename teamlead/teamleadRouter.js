const router = require('express').Router();

const Users = require('../helpers/dbModel');

router.get('/students', async (req, res) => {
   try {
      const token = req.decodedToken;
      const users = await Users.getAllStudentsByCohort(token.cohort);
      res.status(200).json(users)
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   }
})

router.post('/students', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamlead = await Users.getUserByEmail(token.email);
      await Users.insertTeamleadStudent({
         teamlead_id: teamlead.id,
         student_id: req.body.id
      })
      res.status(201).json({
         message: 'New entry successfully created!'
      })
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   }
})

module.exports = router;