const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/User
router.route('/').get(getUser).post(createUser);

// /api/User/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/User/:UserId/thoughts
router.route('/:UserId/thoughts').post(addAssignment);

// /api/User/:UserId/thoughts/:assignmentId
router.route('/:UserId/thoughts/:assignmentId').delete(removeAssignment);

module.exports = router;
