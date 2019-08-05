const router = require('express').Router();

const Users = require('../helpers/dbModel');

router.get('/students/data', async (req, res) => {
   try {
      const token = req.decodedToken;
      const students = await Users.getTeamleadStudents(token.email)
      const studentsMod = students.map(student => {
         student.fullName = student.firstName + ' ' + student.lastName
         delete student.firstName
         delete student.lastName
         return student;
      })
      res.status(200).json(studentsMod);
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
      })
      res.status(201).json({
         message: 'New entry successfully created!'
      })
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
      const students = await Users.getTeamleadStudents(token.email)
      const studentsMod = students.map(student => {
         student.fullName = student.firstName + ' ' + student.lastName
         delete student.firstName
         delete student.lastName
         return student;
      })
      res.status(200).json({
         message: 'Student has been successfully removed from your list',
         students: studentsMod
      })
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;