const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then((users) =>
      res.status(200).json(users))
    .catch(next);
}

function usersShow(req, res, next) {

  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'user not found' });
      return res.status(200).json(user);
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'user not found' });
      return res.status(200).json({ user });
    })
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(() => {
      return res.status(200).json({ message: 'user successfully deleted!' });
    })
    .catch(next);
}

// function saveBar(req, res, next) {
//
// }

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};
