const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connect to MongoDb server');

     const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        _id: 123,
        name: 'Zura',
        age: 20,
        location: 'Tbilisi'
    },(err, result) => {
        if(err){
            return console.log('Unable to insert User', err);
        }
        console.log(result.ops);
    });

    client.close();
});