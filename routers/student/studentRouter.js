const router = require('express').Router();

const Users = require('../../helpers/dbModel');
const { modifier } = require('../../helpers/middlware');
const { newEntry, entryRemoved } = require('../../helpers/variables');

router.get('/teamleads/data', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamleads = await Users.getStudentTeamleads(token.sub);
      const teamleadsMod = modifier(teamleads);
      res.status(200).json(teamleadsMod);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/summary', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamleads = await Users.getStudentTeamleads(token.sub);
      const { quizzesCreated } = await Users.getStudentTeamleadQuizCount(token.sub);
      const [values] = await Users.getStudentCompletions(token.sub);
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
      const student = await Users.getUserById(token.sub);
      await Users.insertTeamleadStudent({
         student_id: student.id,
         teamlead_id: req.body.id
      });
      res.status(201).json({
         message: newEntry
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.delete('/teamleads', async (req, res) => {
   try {
      const token = req.decodedToken;
      const student = await Users.getUserById(token.sub);
      await Users.deleteTeamleadStudent({
         student_id: student.id,
         teamlead_id: req.body.id
      });
      const teamleads = await Users.getStudentTeamleads(token.sub);
      const teamleadsMod = modifier(teamleads);
      res.status(200).json({
         message: entryRemoved('Teamlead'),
         teamleads: teamleadsMod
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;