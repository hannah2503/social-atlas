const router = require('express').Router();
const auth  = require('../controllers/auth');
const bars  = require('../controllers/bars');

router.route('/bars')
  .get(bars.index)
  .post(bars.create);

router.route('/bars/:id')
  .get(bars.show)
  .post(bars.update)
  .delete(bars.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/bars/:id/comments')
  .post(bars.createComment);

router.route('/bars/:id/comments/:commentId')
  .delete(bars.deleteComment);

router.route('/*')
  .all((req, res) => res.notFound());

module.exports = router;
