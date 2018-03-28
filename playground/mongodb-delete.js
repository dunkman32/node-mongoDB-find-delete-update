const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connect to MongoDb server');

    const db = client.db('TodoApp');
    // //  deleteMany
    // db.collection('Todos').
    //  deleteMany({text:'Studqalaqi'}).
    //         then((result)=>{
    //             console.log(result);
    //          });
    // //deleteOne
    // db.collection('Todos').
    //     deleteOne({text:'Studqalaqi'}).
    //         then((result)=>{
    //             console.log(result);
    //         });

    // // findOneAndDelete
    // db.collection('Todos').
    //     findOneAndDelete({completed:false}).
    //         then((result)=>{
    //             console.log(result);
    //         });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5ab50e1693fc5b368d62bc96')
    }).then((result) => {
        console.log(result);
    })
});