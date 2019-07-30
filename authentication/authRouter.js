const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../helpers/dbModel');

router.post('/register', async (req, res) => {
   const { password } = req.body;
   const token = req.token;
   const hashed = bcrypt.hashSync(password, 14);
   req.body.password = hashed;
   try {
      const { id, firstName, lastName } = await Users.insertUser(req.body);
      res.status(201).json({ message: `Hooray! Welcome Aboard, ${firstName}!!`, id, firstName, lastName, token })
   }
   catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   };
});

router.post('/login', (req, res) => {
   try {
      const token = req.token;
      res.status(200).json({ message: `Welcome ${req.user.firstName}!`, token });
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   };
});

module.exports = router;