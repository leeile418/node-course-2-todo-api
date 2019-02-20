var mongoose = require('mongoose');

var User = mongoose.model('User',{
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});


// var userAdd = new User({
//   email: 'leeile418@gmail.com       '
// });
//
// userAdd.save().then((doc) => {
//   console.log(doc);
// }, (err) => {
//   console.log(err);
// });

module.exports = {User}
