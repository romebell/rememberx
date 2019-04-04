const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Note = require('../../models/Note');
const validateNoteInput = require('../../validation/notes');

router.get('/', (req, res) => {
  Note.find()
      .sort({ date: -1 })
      .then(notes => res.json(notes))
      .catch(err => res.status(404).json({ noNotesFound: 'No notes found' }));
});

router.get('/:id',
  (req, res) => {
    Note.findById(req.params.id)
      .then(note => res.json(note))
      .catch(error =>
        res.status(404).json({ noNoteFound: "No note found with that Id" })
      );
  }
);

router.post('/',
    (req, res) => {
      const { errors, isValid } = validateNoteInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newNote = new Note({
    question: req.body.question,
    answer: req.body.answer,
    userId: req.body.userId
  });

  newNote.save().then(note => res.json(note));

});

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Note.findById(req.params.id)
      .then(note => {
        noteOwner = User.findById(note.userId);
          note.remove().then(res.json(note));
      })
    .catch(error =>
      res.status(404).json({ noNoteFound: "Note not found" }))
  });

router.patch('/:id',
  (req, res) => {
    Note.findById(req.params.id)
      .then(note => {
        const newNote = new Note({
          question: req.body.question || note.question,
          answer: req.body.answer || note.answer,
          userId: note.userId,
          id: req.params.id
        });
          newNote.save();
      })
    .catch(error =>
      res.status(404).json({ noNoteFound: "Note not found" }))
});



module.exports = router;
