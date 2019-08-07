const router = require('express').Router();

const Users = require('../helpers/dbModel');
const { modifier } = require('../helpers/middlware');

router.get('/teamleads/data', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamleads = await Users.getStudentTeamleads(token.email)
      const teamleadsMod = modifier(teamleads);
      res.status(200).json(teamleadsMod);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/summary', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamleads = await Users.getStudentTeamleads(token.email);
      const { quizzesCreated } = await Users.getStudentTeamleadQuizCount(token.email);
      const [values] = await Users.getStudentCompletions(token.email)
      res.status(200).json({
         teamleads: teamleads.length,
         quizzesCreated,
         completionRate: Math.round((values.submitted / values.total) * 100),
         avgQuizScore: Math.round(values.avgQuizScore)
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/teamleads', async (req, res) => {
   try {
      const token = req.decodedToken;
      const student = await Users.getUserByEmail(token.email);
      await Users.insertTeamleadStudent({
         student_id: student.id,
         teamlead_id: req.body.id
      })
      res.status(201).json({
         message: 'New entry successfully created!'
      })
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.delete('/teamleads', async (req, res) => {
   try {
      const token = req.decodedToken;
      const student = await Users.getUserByEmail(token.email);
      await Users.deleteTeamleadStudent({
         student_id: student.id,
         teamlead_id: req.body.id
      });
      const teamleads = await Users.getStudentTeamleads(token.email)
      const teamleadsMod = modifier(teamleads)
      res.status(200).json({
         message: 'Teamlead has been successfully removed from your list',
         teamleads: teamleadsMod
      })
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;