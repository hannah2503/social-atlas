const Bar = require('../models/bar');

function barsIndex(req, res, next) {
  Bar
    .find()
    .populate('createdBy')
    .exec()
    .then(bars => res.json(bars))
    .catch(next);
}

function barsCreate(req, res, next) {
  
  req.body.createdBy = req.currentUser;

  Bar
    .create(req.body)
    .then(bar => res.status(201).json(bar))
    .catch(next);
}

function barsShow(req, res, next) {
  Bar
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();
      res.json(bar);
    })
    .catch(next);
}

function barsUpdate(req, res, next) {

  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();
      bar = Object.assign(bar, req.body);
      return bar.save();
    })
    .then(bar => res.json(bar))
    .catch(next);
}

function barsDelete(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();
      return bar.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();

      bar.comments.push(req.body); // create an embedded record
      return bar.save();
    })
    .then((bar) => res.redirect(`/bars/${bar.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Bar
    .findById(req.params.id)
    .exec()
    .then((bar) => {
      if(!bar) return res.notFound();
      // get the embedded record by it's id
      const comment = bar.comments.id(req.params.commentId);
      comment.remove();

      return bar.save();
    })
    .then((bar) => res.redirect(`/bars/${bar.id}`))
    .catch(next);
}

module.exports = {
  index: barsIndex,
  create: barsCreate,
  show: barsShow,
  update: barsUpdate,
  delete: barsDelete,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
