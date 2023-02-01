const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: date => moment(date).format('MMMM Do YYYY, h:mm:ss a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
)

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

// Initialize Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;