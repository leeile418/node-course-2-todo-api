//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var IDtoDelete = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  //DeleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //DeleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:'Ile'}).then((results) => {
  //   console.log(JSON.stringify(results,undefined,2));
  // }, (err) => {
  //   console.log('unable',err);
  // });

  db.collection('Users').findOneAndDelete({
    _id : new ObjectID("5c6bf32858f142101c5ea093")
  }).then((results) => {
    console.log(JSON.stringify(results,undefined,2));
  });


  //db.close();
});
