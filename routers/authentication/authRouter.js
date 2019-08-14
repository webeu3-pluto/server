const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../../helpers/dbModel');
const { generateToken } = require('../../helpers/tokenize');
const { errorMessage, regWelcome, loginWelcome } = require('../../helpers/variables');

router.post('/register', async (req, res) => {
   const { password } = req.body;
   const hashed = bcrypt.hashSync(password, 14);
   req.body.password = hashed;
   try {
      const { id, firstName, lastName, email, role, cohort } = await Users.insertUser(req.body);
      const token = await generateToken({ id, firstName, lastName, email, role, cohort })
      res.status(201).json({ message: regWelcome(firstName), id, firstName, lastName, email, role, cohort, token });
   }
   catch (error) {
      res.status(500).json(errorMessage);
   };
});

router.post('/login', (req, res) => {
   try {
      const token = generateToken(req.user);
      const { id, firstName, lastName, email, role, cohort } = req.user;
      res.status(200).json({ message: loginWelcome(firstName), id, firstName, lastName, email, role, cohort, token });
   } catch (error) {
      res.status(500).json(errorMessage);
   };
});

module.exports = router;