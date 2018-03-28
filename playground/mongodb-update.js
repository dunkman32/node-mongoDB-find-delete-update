const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connect to MongoDb server');

    const db = client.db('TodoApp');
    // // findOneAndUpdate
    //
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5abb3b07ab3927dad4dd27f0')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
          _id: new ObjectID('5ab50afc27a0872f3e8f5811')
        },{
            $set: {
                name: 'zura'
            },
            $inc: {
                age: 1
            }
        },{
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });
});