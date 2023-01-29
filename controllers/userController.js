const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');


module.exports = {

  // Get all Users
  getUser(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

}