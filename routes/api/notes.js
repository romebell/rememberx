const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Note = require('../../models/Note');
const validateNoteInput = require('../../validation/notes');

router.get("/test", (req, res) => res.json({ msg: "This is the notes route" }));

router.post('/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
      const { errors, isValid } = validateNoteInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newNote = new Note({
    question: req.body.question,
    answer: req.body.answer,
    userId: req.user.id
  });

  newNote.save().then(note => res.json(note));

});

// router.delete('/',
  // passport.authenticate('jwt', { session: false }),
  // (req, res) => {

    // Note.findOneAndDelete({
    // Note.findOneAndRemove({
//       id: req.body.id,
//     }).then((note) => {
//       if (!note) {
//         return res.status(404).send();
//       }
//       res.send({
//         note
//       });
//     }).catch(e => {
//       res.status(400).send();
//     });
// });


router.delete('/',
  (req, res) => {
    Note.findById(req.body.id)
      .then(note => {
        noteOwner = User.findById(note.userId);
        // if (noteOwner.id === req.user.id) {
          note.remove().then(res.json(note));
        // } else {
        //   res.status(403).json({ incorrectPermission: "You cannot delete this note" })
        // }
      })
    .catch(error =>
      res.status(404).json({ noNoteFound: "Note not found" }))
  });






//   User.findOne({ email: req.body.email })
//   .then(user => {
//     if (user) {
//       return res.status(400).json({email: "A user has already registered with this address"})
//     } else {
//       const newUser = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//       })

//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser.save()
//             .then( user => {
//               const payload = { id: user.id, name: user.name };

//               jwt.sign(payload, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
//                 res.json({
//                   success: true,
//                   token: "Bearer " + token
//                 })
//               })
//             })
//             .catch(err => console.log(err));
//           })
//         });
//       }
//     });
// });

// router.post('/login', (req, res) => {
//   const { errors, isValid } = validateLoginInput(req.body);

//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   User.findOne({ email })
//     .then(user => {
//       if (!user) {
//         return res.status(404).json({email: "This user does not exist"});
//       }

//       bcrypt.compare(password, user.password)
//         .then(isMatch => {
//           if (isMatch) {
//             const payload = {id: user.id, name: user.name};

//             jwt.sign(
//               payload,
//               keys.secretOrKey,
//               {expiresIn: 3600},
//               (err, token) => {
//                 res.json({
//                   success: true,
//                   token: 'Bearer ' + token
//                 })
//               }
//             )
//           } else {
//             return res.status(400).json({password: 'Incorrect Password'});
//           }
//         })
//     })
// })



module.exports = router;
