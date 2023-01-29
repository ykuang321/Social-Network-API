const { Schema, Types } = require('mongoose');

//SCHEMA ONLY
const reactionSchema = new Schema(
  {
    reactionId: {

    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createAt: {
      type: Date,
      default: Date.now,
      //TODO: Use a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

module.exports = reactionSchema;