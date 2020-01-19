
exports.testConnection = (response) => {
    // const MongoClient = require('mongodb').MongoClient;
    // const uri = "mongodb+srv://BCHacks2020:BCHacks2020@cluster0-jvqfv.gcp.mongodb.net/test?retryWrites=true&w=majority";
    // const client = new MongoClient(uri, { useNewUrlParser: true });
    // client.connect(err => {
    //     if(err) throw err;

    //     const collection = client.db("BCHacks2020").collection("Emissions");

    //     var query = {$and : [{co2 : {$ne : "-1"}}, {co2 : {$ne : "0"}}]};


    //     collection.find(query).toArray((err, result) => {
    //         if (err) throw err;
    //         response.status(200).send("Reached");
    //         //console.log(result);

    //     });

    //     client.close();
    // });

    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb+srv://BCHacks2020:BCHacks2020@cluster0-jvqfv.gcp.mongodb.net/test?retryWrites=true&w=majority", (err, db) => {
        if(!err) {
            var dataBase = db.db("BCHacks2020");
            var collection = dataBase.collection("Emissions");
            
            var query = {$and : [{co2 : {$ne : "-1"}}, {co2 : {$ne : "0"}}]};

            collection.find(query).toArray((err, result) => {
                console.log("We are connected");
                if (err) throw err;
                console.log(result);

            });

            response.status(200).send("We are connected");
        }
    });
}
    
    
//     const MongoClient = require('mongodb').MongoClient;
//     const uri = "mongodb+srv://BCHacks2020:BCHacks2020@cluster0-jvqfv.gcp.mongodb.net/test?retryWrites=true&w=majority";
//     const client = new MongoClient(uri, { useNewUrlParser: true }, { useUnifiedTopology: true });
//     client.connect(err => {
//         if(err) throw err;
//         const collection = client.db("BCHacks2020").collection("Emissions");

//         // perform actions on the collection object
//         var query = {$and : [{co2 : {$ne : "-1"}}, {co2 : {$ne : "0"}}]};
//         collection.find(query).toArray((err, result) => {
//             console.log(result);
//             if (err) throw err;
//         });

//         client.close();
//     });


// }

// ar MongoClient = require('mongodb').MongoClient;

// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
    
//     db.collection('Persons', function (err, collection) {
        
//         collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
//         collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
//         collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

//         db.collection('Persons').count(function (err, count) {
//             if (err) throw err;
            
//             console.log('Total Rows: ' + count);
//         });
//     });
                
// });
