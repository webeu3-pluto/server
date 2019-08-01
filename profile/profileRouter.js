const router = require('express').Router();

const Users = require('../helpers/dbModel');

router.put('/user', async (req, res) => {
   try {
      const token = req.decodedToken;
      const user = await Users.updateUser(token.email, req.body)
      res.status(200).json({
         message: 'User data successfully updated',
         user
      });
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   }
});

router.delete('/user', async (req, res) => {
   try {
      const token = req.decodedToken;
      await Users.deleteUser(token.email);
      res.status(200).json({
         message: 'User data successfully deleted'
      })
   } catch (error) {
      res.status(500).json('Oops! We missed that. Hang on, let\'s fix it together');
   }
});

module.exports = router;