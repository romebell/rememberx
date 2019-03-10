const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateNoteInput(data) {
  let errors = {};
  
  data.question = validText(data.question) ? data.question: '';
  data.answer = validText(data.answer) ? data.answer: '';
  data.userId = validText(data.userId) ? data.userId: '';

  // if (!Validator.isLength(data.text, { min: 5, max: 140 })) {
  //   errors.text = 'Tweet must be between 5 and 140 characters';
  // }

  if (Validator.isEmpty(data.question)) {
    errors.question = 'Question field is required';
  }

  if (Validator.isEmpty(data.answer)) {
    errors.answer = 'Answer field is required';
  }

  if (Validator.isEmpty(data.userId)) {
    errors.answer = 'Cannot create notes without being logged in';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};