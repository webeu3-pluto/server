const router = require('express').Router();

const Users = require('../../helpers/dbModel');
const { modifier } = require('../../helpers/middlware');
const { newEntry, entryRemoved } = require('../../helpers/variables');

router.get('/students/data', async (req, res) => {
   try {
      const token = req.decodedToken;
      const students = await Users.getTeamleadStudents(token.email);
      const studentsMod = modifier(students);
      res.status(200).json(studentsMod);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/summary', async (req, res) => {
   try {
      const token = req.decodedToken;
      const students = await Users.getTeamleadStudents(token.email);
      const { quizzesCreated } = await Users.getTeamleadQuizCount(token.email);
      const [values] = await Users.getTeamleadCompletions(token.email);
      res.status(200).json({
         students: students.length,
         quizzesCreated,
         completionRate: Math.round((values.submitted / values.total) * 100),
         avgStudentScore: Math.round(values.avgStudentScore)
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.post('/students', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamlead = await Users.getUserByEmail(token.email);
      await Users.insertTeamleadStudent({
         teamlead_id: teamlead.id,
         student_id: req.body.id
      });
      res.status(201).json({
         message: newEntry
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.delete('/students', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamlead = await Users.getUserByEmail(token.email);
      await Users.deleteTeamleadStudent({
         teamlead_id: teamlead.id,
         student_id: req.body.id
      });
      const students = await Users.getTeamleadStudents(token.email);
      const studentsMod = modifier(students);
      res.status(200).json({
         message: entryRemoved('Student'),
         students: studentsMod
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;