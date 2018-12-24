const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
  firstName: { type: String, required: 'Please provide first name' },
  lastName: { type: String, required: 'Please provide last name' },
  email: { type: String, required: 'Please provide email' },
  picture: { type: String },
  favorites: [{ type: mongoose.Schema.ObjectId, ref: 'Bar' }],
  // barRatings: [{ type: mongoose.Schema.ObjectId, ref: 'Bar'}],
  password: { type: String, required: 'A password is required' }
});

userSchema
  .virtual('passwordConfirmation')
  .set(function
    setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

userSchema.pre('validate', function checkPassword(next) {
  if (this.isNew) {
    if(!this._passwordConfirmation || this._passwordConfirmation !== this.password) {
      this.invalidate('passwordConfirmation', 'Passwords do not match');
    }
  }
  next();
});

userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
