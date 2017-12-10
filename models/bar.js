const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true }
},{
  timestamps: true
});

commentSchema.methods.belongsTo = function commentBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  location: { lat: Number, lng: Number },
  image: { type: String, required: true },
  website: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  category: [{ type: String, required: true }],
  rating: { type: Number, required: true },
  comments: [commentSchema],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});


module.exports = mongoose.model('bar', barSchema);
