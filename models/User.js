const { Schema, model } = require('mongoose');

const userdata = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //TODO: check email validation
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: "Thought",
      },
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: "User",
      },
    ],
  },
)