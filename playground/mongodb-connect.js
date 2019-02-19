//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj); look at eg below to see how this works

// var user= {name: 'Ile', age: 21};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //     if (err) {
  //         return console.log('Unable to insert todo',err);
  //     }
  //
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  // });

// db.collection('Users').insertOne({
//   name: 'Ile',
//   age: 21,
//   location: 'SA'
// }, (error,results) => {
//   if (error) {
//     return console.log('unable to insert users',error);
//   }
//   console.log(results.ops[0]._id.getTimestamp());
// });

  db.close();
});
