const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/user
// GET all users
// POST a new user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
// GET a single user by its _id and populated thought and friend data
// PUT to update a user by its _id
// DELETE to remove user by its _id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:userId/friends/:friendId
// POST to add a new friend to a user's friend list
// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;