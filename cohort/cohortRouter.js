const router = require('express').Router();

const Users = require('../helpers/dbModel');

router.get('/students', async (req, res) => {
   try {
      const token = req.decodedToken;
      const students = await Users.getAllByCohort('Student', token.cohort);
      res.status(200).json(students)
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.get('/teamleads', async (req, res) => {
   try {
      const token = req.decodedToken;
      const teamleads = await Users.getAllByCohort('Team Lead', token.cohort);
      res.status(200).json(teamleads)
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;