const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const auth  = require('../controllers/auth');
const bars  = require('../controllers/bars');
const users  = require('../controllers/users');

router.route('/bars')
  .get(bars.index)
  .post(secureRoute, bars.create);

router.route('/bars/:id')
  .get(bars.show)
  .post(bars.update)
  .delete(bars.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/bars/:id/comments')
  .post(bars.createComment);

router.route('/bars/:id/comments/:commentId')
  .delete(bars.deleteComment);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
