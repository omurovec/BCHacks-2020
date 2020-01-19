const functions = require('firebase-functions');
const dataUpload = require("./dataUpload")

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//Using input of Make (as String) and Year (As String) returns the list of corresponding models from the database
exports.getModel = functions.https.onRequest((request, response) => {
    //As String!!!
    var make = request.body.make;
    //As String!!!
    var year = request.body.year;
    
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb+srv://BCHacks2020:BCHacks2020@cluster0-jvqfv.gcp.mongodb.net/test?retryWrites=true&w=majority", async (err, db) => {
        if(!err) {
            var dataBase = db.db("BCHacks2020");
            var collection = dataBase.collection("Emissions");
            
            var query = {$and : [{make : make}, {year : year}, {co2 : {$ne : "-1"}}]};

            const queryResponse = await collection.find(query).toArray().catch(error=>{console.log(error)});
            response.status(200).send(queryResponse);
        }
    });

});

//Get CO2 emissions
exports.getCO2 = functions.https.onRequest((request, response) => {
    //As String!!!
    var make = request.body.make;
    //As String!!!
    var year = request.body.year;
    //As String!!!
    var model = request.body.model;
    
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb+srv://BCHacks2020:BCHacks2020@cluster0-jvqfv.gcp.mongodb.net/test?retryWrites=true&w=majority", (err, db) => {
        if(!err) {
            var dataBase = db.db("BCHacks2020");
            var collection = dataBase.collection("Emissions");
            
            var query = {$and : [{make : make}, {year : year}, {co2 : {$ne : "-1"}}, {model : model}]};

            console.log(year);

            collection.findOne(query).then( (queryResponse) => {response.status(200).send(queryResponse); return} ).catch(error=>{console.log(error)});

           
        }
    });

});

//Get List of Makes
exports.getMakes = functions.https.onRequest((request, response) => {
    console.log("1");
    var MongoClient = require('mongodb').MongoClient;
    console.log("2");
    // Connect to the db
    MongoClient.connect("mongodb://BCHacks2020:BCHacks2020@cluster0-shard-00-00-jvqfv.gcp.mongodb.net:27017,cluster0-shard-00-01-jvqfv.gcp.mongodb.net:27017,cluster0-shard-00-02-jvqfv.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority", (err, db) => {
        if(!err) {
            console.log("3");
            var dataBase = db.db("BCHacks2020");
            var collection = dataBase.collection("Emissions");
            console.log("4");
            var makes = collection.distinct("make").then( (queryResponse) => {response.status(200).send(queryResponse); return} ).catch(error=>{console.log(error)})
        } else {
            console.log(err);
        }
        db.close();
    });

});

exports.test = functions.https.onRequest((request, response) => {
    response.status(200).send(request.body)
})