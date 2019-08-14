const router = require('express').Router();

const Users = require('../../helpers/dbModel');
const { profileUpdated, profileDeleted } = require('../../helpers/variables');

router.put('/user', async (req, res) => {
   try {
      const token = req.decodedToken;
      const user = await Users.updateUser(token.sub, req.body);
      res.status(200).json({
         message: profileUpdated,
         user
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

router.delete('/user', async (req, res) => {
   try {
      const token = req.decodedToken;
      await Users.deleteUser(token.sub);
      res.status(200).json({
         message: profileDeleted
      });
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
});

module.exports = router;