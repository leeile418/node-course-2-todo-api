//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var IDtoDelete = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c6c6447604ed81c2f454d8a')
//   }, {$set: {
//     completed: true
//   }
// }, {
//   returnOriginal : false
// }).then((result) => {
//   console.log(result);
// });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5c6bf32858f142101c5ea092')
                                        },
  {
     $set: {name: 'Ile'}
    , $inc: {age: 1}
  }

   ,

    { returnOriginal: false

}).then((result) => {
  console.log(result);
});

// db.collection('Users').findOneAndUpdate({
//   age: 21
// },{ $inc: {age: 1}},
// {returnOriginal: false});


  //db.close();
});
