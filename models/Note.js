const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  question: {
    type: Schema.Types.Mixed,
    required: true
  },
  answer: {
    type: Schema.Types.Mixed,
    required: true
  },
  lastAnswered: {
    type: Date,
    default: Date.now 
  },
  lastAnsweredCorrectly: {
    type: Date,
    default: Date.now
  },
  numberTimesAnsweredCorrectly: {
    type: Number,
    default: 0
  },
  userId: {
    // type: String,
    // required: true
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  collectionIds: {
    type: []
  }
})

module.exports = Note = mongoose.model('notes', NoteSchema);