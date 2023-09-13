
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String, 
  isAdmin: Boolean,
});


adminSchema.pre('save', function (next) {
  const admin = this;
  if (!admin.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) return next(err);

      admin.password = hash;
      next();
    });
  });
});


adminSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = mongoose.model('Admin', adminSchema);


