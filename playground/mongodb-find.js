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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c6bf9fe604ed81c2f454715')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }), (err) => {
  //   console.log('uNable to fetch todos',err);
  // };

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }), (err) => {
  //   console.log('uNable to fetch todos',err);
  // };

  db.collection('Users').find({name: 'Ile'}).toArray().then((name) => {
    console.log(name);
  });

  //db.close();
});
