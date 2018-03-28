const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connect to MongoDb server');

    const db = client.db('TodoApp');
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count : ',count);
    },(err) =>{
        console.log('error ', err);
    });
});