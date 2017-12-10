const router = require('express').Router();


const bars  = require('../controllers/bars');
const users  = require('../controllers/users');

const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');


router.route('/bars')
  .get(bars.index)
  .post(secureRoute, bars.create);

router.route('/bars/:id')
  .get(bars.show)
  .put(secureRoute, bars.update)
  .delete(secureRoute, bars.delete);

router.route('/users')
  .get(secureRoute, users.index);

router.route('/users/:id')
  .get(secureRoute, users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/bars/:id/comments')
  .post(secureRoute, bars.createComment);

router.route('/bars/:id/comments/:commentId')
  .delete(secureRoute, bars.deleteComment);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
